package loginproducer;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceRegistration;

import com.lab.LoginProducer.LoginProducer;
import com.lab.LoginProducer.LoginProducerIMP;

public class LoginProducerActivator implements BundleActivator {

	private static BundleContext context;
	private ServiceRegistration loginReg;

	static BundleContext getContext() {
		return context;
	}

	public void start(BundleContext bundleContext) throws Exception {
		LoginProducerActivator.context = bundleContext;
		
         System.out.println(" Login Producer Started");
		
		LoginProducerActivator.context = bundleContext;
		
		LoginProducer test = new LoginProducerIMP();
		
		loginReg = bundleContext.registerService(LoginProducer.class.getName(), test, null);
		
	}

	public void stop(BundleContext bundleContext) throws Exception {
		
		System.out.println(" Login Producer Stoped !");
		LoginProducerActivator.context = null;
		loginReg.unregister();
		
	}


}
