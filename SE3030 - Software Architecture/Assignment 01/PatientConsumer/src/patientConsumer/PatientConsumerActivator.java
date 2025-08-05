package patientConsumer;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

import com.lab.AppointmentProducer.AppointmentProducer;
import com.lab.AppointmentProducer.AppointmentProducerIMP;
import com.lab.LabTestProducer.LabTestProducer;
import com.lab.TestReportProducer.TestReportProducer;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.framework.ServiceRegistration;

public class PatientConsumerActivator implements BundleActivator {

	private static BundleContext context;
	private ServiceReference TestReportRef,AppointmentRef,LabTestRef;
	private ServiceRegistration PatientReq;
	
	private TestReportProducer testReport;
	private AppointmentProducer appointment;
	private LabTestProducer labTest;

	Scanner scanner = new Scanner(System.in);

	public void start(BundleContext bundleContext) throws Exception {
		
		System.out.println("Patient Consumer Started ");
		
		//PatientConsumerActivator Registration
        PatientReq = bundleContext.registerService(this.getClass().getName(), this, null);
          
         
        //Get service from TestReportProducer
		TestReportRef = bundleContext.getServiceReference(TestReportProducer.class.getName());
	    testReport = (TestReportProducer) bundleContext.getService(TestReportRef);

	    //Get service from AppointmentProducer
		AppointmentRef = bundleContext.getServiceReference(AppointmentProducer.class.getName());
		appointment = (AppointmentProducer) bundleContext.getService(AppointmentRef);
		
		//Get service from LabTestProducer
		LabTestRef = bundleContext.getServiceReference(LabTestProducer.class.getName());
		labTest = (LabTestProducer) bundleContext.getService(LabTestRef);		
		
	}
	
        
  

	public void stop(BundleContext bundleContext) throws Exception {

		System.out.println("Patient Consumer Stoped ");
		
		PatientReq.unregister();
		
		bundleContext.ungetService(AppointmentRef);
		bundleContext.ungetService(LabTestRef);
		bundleContext.ungetService(TestReportRef);
		

	}
	
	public void displayPatient() {
		
		BufferedReader buffin  = new BufferedReader(new InputStreamReader(System.in));
		String option = "0";
		

		while(true) {

			System.out.println("\n=======================");
			System.out.println("1 : Add Appointment");
			System.out.println("2 : Search Appointments");
			System.out.println("3 : Get Appointment Bill");
			System.out.println("4 : View Test Report");
			System.out.println("5 : View Available Lab Tests");
			System.out.println("6 : Exit\n\n");

			System.out.print("Please Select An Option :");
			//int option = scanner.nextInt();
			
			try {
				 option = buffin.readLine();
				
			}catch (IOException e) {
				
				e.printStackTrace();
			}
			
            //check whether input is in(1-6)
			int count = 0;
			for (int i = 0; i < 7; i++) {
				if (option.equals(Integer.toString(i)))
					count++;
			}

			if (count == 0)
				continue;
			
            
			//exit option
            
            
			if(option.equals("1")) {

				appointment.addAppointment();

			}else if(option.equals("2")) {

				appointment.searchAppointment();

			}else if(option.equals("3")) {

				appointment.generateAppointmentBills();

			}else if(option.equals("4")) {

				testReport.viewTestReports();
				
				
			}else if(option.equals("5") ){

				labTest.viewAllTest();

			} else if(option.equals("6")) {

				break;
			} else {
				continue;
			}
			
			
		}

		
	}


}
