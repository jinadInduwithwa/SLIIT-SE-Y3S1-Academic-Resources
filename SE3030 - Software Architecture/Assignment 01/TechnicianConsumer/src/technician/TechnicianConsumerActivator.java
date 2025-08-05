package technician;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.framework.ServiceRegistration;

import com.lab.AppointmentProducer.AppointmentProducer;
import com.lab.TestReportProducer.TestReportProducer;

public class TechnicianConsumerActivator implements BundleActivator {

	private ServiceReference TestReportRef,AppointmentRef;
	private ServiceRegistration technicianRef;
    private TestReportProducer testReport;
    private AppointmentProducer appointment;
    
    Scanner scanner = new Scanner(System.in);
    
	public void start(BundleContext bundleContext) throws Exception {
		
		
		System.out.println("Technicial Consumer Started ");
		
		//TechnicianConsumerActivator Registration
		technicianRef = bundleContext.registerService(this.getClass().getName(), this, null);
		
        //Get service from TestReportProducer
		TestReportRef = bundleContext.getServiceReference(TestReportProducer.class.getName());
		testReport = (TestReportProducer) bundleContext.getService(TestReportRef);

		//Get service from AppointmentProducer
		AppointmentRef = bundleContext.getServiceReference(AppointmentProducer.class.getName());
		appointment = (AppointmentProducer) bundleContext.getService(AppointmentRef);
		
		
	}

	public void stop(BundleContext bundleContext) throws Exception {
		
		System.out.println("Technicial Consumer Stoped ");
		
		
		technicianRef.unregister();
		bundleContext.ungetService(TestReportRef);
		bundleContext.ungetService(AppointmentRef);
		
		
	}
	
	public void displayTechnician(){
		
		BufferedReader buffin  = new BufferedReader(new InputStreamReader(System.in));
		
while(true) {
			
			System.out.println("=============================");
			System.out.println("");
			System.out.println("1. Add Test Reports");
	        System.out.println("2. View Test Reports");
	        System.out.println("3. View Appointments");
	        System.out.println("4. Search Appointments");
	        System.out.println("5. Exit from the programe");
			System.out.println("");
	        System.out.println("Select an option(1-4):");
	        
	        String opt="";
	        
	        try {
				
	        	opt = buffin.readLine();
	        	
			} catch (Exception e) {
				
				e.printStackTrace();
			}
	         
	        
	        if (opt.equals("5") )break;
	        
	        if (opt.equals("1")) {
	        	
	        	testReport.addTestReport();
	        	
	        }else if (opt.equals("2")) {
	        	
	        	testReport.viewTestReports();
	        	
	        }else if (opt.equals("3")) {
	        	
	        	appointment.displayAppointment();
	        	
	        }else if (opt.equals("4")) {
	        	
	        	appointment.searchAppointment();
	        	
	        }else {
	        	
	        	System.out.println("ERROR! Invalid input entered. Please try again.");
	        	continue;
	        }
		}
	}


}
