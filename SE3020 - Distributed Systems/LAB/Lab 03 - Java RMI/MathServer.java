import java.net.MalformedURLException;
import java.rmi.AlreadyBoundException;
import java.rmi.Naming;
import java.lang.SecurityManager;
import java.rmi.RemoteException;
import java.rmi.registry.LocateRegistry;
import java.util.concurrent.atomic.AtomicInteger;
import java.rmi.server.UnicastRemoteObject;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;

public class MathServer extends UnicastRemoteObject implements MathService {

	// TODO: Add a private variable to keep the client count
	private static final long serialVersionUID = 1L;
    private static AtomicInteger clientCount = new AtomicInteger(0);

	// Thread pool for handling long tasks without blocking
    private static ExecutorService executor = Executors.newFixedThreadPool(5);

	public MathServer() throws RemoteException {
		super();
	}

	// TODO: add a method to increment the client count. Make it thread safe
	public synchronized void incrementClientCount() {
        int count = clientCount.incrementAndGet();
        System.out.println("Client connected. Total clients: " + count);
    }

	// interface implementations
	public int add(int a, int b) throws RemoteException {
		System.out.println("Adding " + a + " and " + b + " in the Server");
		return a + b;
	}

	public int subtract(int a, int b) throws RemoteException {
		System.out.println("Substracting " + a + " and " + b + " in the Server");
		return a - b;
	}

	public int multiply(int a, int b) throws RemoteException {
		System.out.println("Multiplying " + a + " and " + b + " in the Server");
		return a * b;
	}

	// this method is not remotely accessible as it's not in the remote interface
	public int test(int a) {
		System.out.println("this is a test");
		return 0;
	}

	public int divide(int a, int b) throws RemoteException {
        if (b == 0) {
            throw new RemoteException("Error: Cannot divide by zero!");
        }

        System.out.println("Dividing " + a + " and " + b + " in the Server");

        // TODO: Run long computation in a separate thread to avoid blocking
        executor.submit(() -> {
            for (double i = 0; i < 1_000_000_000.0; i++) {
                if (i % 100000000 == 0) {
                    System.out.println("Processing long task...");
                }
            }
        });

        return a / b;
    }
	
	public static void main(String[] args) {

		// set the policy file as the system securuty policy
		System.setProperty("java.security.policy", "file:allowall.policy");

		try {

			MathServer svr = new MathServer();

			// Bind the remote object's stub in the registry
			Registry registry = LocateRegistry.getRegistry();
			registry.bind("CalculatorService", svr);

			System.out.println("Service started....");

		} catch (RemoteException re) {
			System.err.println(re.getMessage());
		} catch (AlreadyBoundException abe) {
			System.err.println(abe.getMessage());
		}
	}
}