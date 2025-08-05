package mainmenuconsumer;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Scanner;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;

import com.lab.LoginProducer.LoginProducer;

import labAssistant.LabAssistantConsumerActivator;
import medicalRep.MedicalRepConsumerActivator;
import patientConsumer.PatientConsumerActivator;
import technician.TechnicianConsumerActivator;

public class MainMenuConsumerActivator implements BundleActivator {

	private static BundleContext context;
	private ServiceReference PatientRef;
	private ServiceReference TechnicianRef;
	private ServiceReference LabAssistantRef;
	private ServiceReference MedicalRep;
	private ServiceReference LoginRef;
	
    private LoginProducer login;
	
	Scanner scanner =  new Scanner(System.in);
	int option; 
	
	static BundleContext getContext() {
		return context;
	}

	public void start(BundleContext bundleContext) throws Exception {
		
		MainMenuConsumerActivator.context = bundleContext;
		
		//Connect to PatientConsumerActivator class
		PatientRef = context.getServiceReference(PatientConsumerActivator.class.getName());
		PatientConsumerActivator patient = (PatientConsumerActivator) bundleContext.getService(PatientRef);
		
		//Connect to PatientConsumerActivator class
		TechnicianRef = context.getServiceReference(TechnicianConsumerActivator.class.getName());
		TechnicianConsumerActivator technician = (TechnicianConsumerActivator) bundleContext.getService(TechnicianRef);
		
		//Connect to LabAssistantConsumerActivator class
		LabAssistantRef = context.getServiceReference(LabAssistantConsumerActivator.class.getName());
		LabAssistantConsumerActivator labAssistant = (LabAssistantConsumerActivator) bundleContext.getService(LabAssistantRef);
		
		//Connect to MedicalRepConsumerActivator class
		MedicalRep = context.getServiceReference(MedicalRepConsumerActivator.class.getName());
		MedicalRepConsumerActivator medicalRep = (MedicalRepConsumerActivator) bundleContext.getService(MedicalRep );
		
		//Connect to LoginProducerActivator class
		LoginRef = bundleContext.getServiceReference(LoginProducer.class.getName());
		login = (LoginProducer) bundleContext.getService(LoginRef);
		
		while(true) {
			
		System.out.println("\n=================================");
		System.out.println("\n  E-Lab  \n");
		BufferedReader buffin  = new BufferedReader(new InputStreamReader(System.in));
		String option = "0";
		
		System.out.println("\n=================================");
		System.out.println("\nYou are a,\n");
		System.out.println("1.Patient ");
		System.out.println("2.Employee ");
		
		System.out.println("\n---------------------\n");
		System.out.println("3.Exit from the system ");
		System.out.print("\nSelect An Option :");
		
        String opt = scanner.nextLine();
        
        if(opt.equals("3")) {
        	
        	System.out.println(" Good Bye !!!");
        	break;
        }
        
//        if(opt <0 || opt >2){
//        	System.out.println("\n=================================");
//        	System.out.println("\n Ivalid Type !!! Please Try Again !\n");
//    
//        	continue;
//         }
        
        else if (opt.equals("1")) {
        	
			patient.displayPatient();
        	
        }else if(opt.equals("2")){
        	
        	boolean status = login.employeeLogin();
        	
        	if(status == true) {
        		
        		while(true) {
        			
        			System.out.println("\n=================================");
        			System.out.println("\n\n\nPlease Select An Option !\n");
        			System.out.println("1.Technician ");
        			System.out.println("2.LabAssistant ");
        			System.out.println("3.MedicalRep ");
        			System.out.println("4.Exit \n\n");
        			
        			System.out.print("Select An Option :");
        			option = buffin.readLine();
        			//option = scanner.nextInt();
        			
        			if(option.equals("1")) {
        				
        				technician.displayTechnician();
        				
        			}else if(option.equals("2")){
        				
        				labAssistant.displayLabAssistant();
        			}else if(option.equals("3")) {
        				
        				medicalRep.displayMedicalRep();
        			}else if(option.equals("4") ){
        				
        				break;
        			}
        		}
        	}else {
        		
        		System.out.println("Please try again");
        		continue;
        		
        	}
        	
        }
		}
	}
	public void stop(BundleContext bundleContext) throws Exception {
		MainMenuConsumerActivator.context = null;
		
		System.out.println(" Main Menu Consumer Stopped ");
		bundleContext.ungetService(LoginRef);
		bundleContext.ungetService(PatientRef);
		bundleContext.ungetService(LabAssistantRef);
		bundleContext.ungetService(MedicalRep);
		bundleContext.ungetService(TechnicianRef);
		
	}

}
