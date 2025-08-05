package medicalRep;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import org.osgi.framework.BundleActivator;
import org.osgi.framework.BundleContext;
import org.osgi.framework.ServiceReference;
import org.osgi.framework.ServiceRegistration;

import com.lab.ChemicalProducer.ChemicalProducer;

public class MedicalRepConsumerActivator implements BundleActivator {

	private ServiceReference chemicalRef;
	private ServiceRegistration MedicalRep;
	
    private ChemicalProducer chemical;
    
	public void start(BundleContext bundleContext) throws Exception {
		
		System.out.println("Medical Rep Consumer Started ");
		
		//MedicalRepConsumerActivator Registration
		MedicalRep = bundleContext.registerService(this.getClass().getName(), this, null);
		
		//Get service from ChemicalProducer
		chemicalRef = bundleContext.getServiceReference(ChemicalProducer.class.getName());
		chemical = (ChemicalProducer) bundleContext.getService(chemicalRef);
		
	}

	public void stop(BundleContext bundleContext) throws Exception {
		
		System.out.println("Medical Rep Consumer Stoped ");
		
		
		MedicalRep.unregister();
		bundleContext.ungetService(chemicalRef);
		
		
	}
	
	public void displayMedicalRep() {
		
		BufferedReader input  = new BufferedReader(new InputStreamReader(System.in));
		String ans = "0";
		
         while(true) {
			
			System.out.println("=============================\n");
			System.out.println("1. Add Chemicals");
	        System.out.println("2. View Chemicals");
	        System.out.println("3. Update Chemicals");
	        System.out.println("4. Generate Chemical Bill");
	        System.out.println("5. Exit\n");
			System.out.println("=============================\n");
	        System.out.print("Select an option(1-5):");
	        
	        
			try {
				ans = input.readLine();
				
			}catch (IOException e) {
				
				e.printStackTrace();
			}
			
           //check whether input is in(1-5)
			int count = 0;
			for (int i = 0; i < 6; i++) {
				if (ans.equals(Integer.toString(i)))
					count++;
			}

			if (count == 0)
				continue;
	        
            if(ans.equals("5")) {

				break;
			}
	        
	        if (ans.equals("1")) {
	        	
	        	chemical.addchemical();
	        	
	        }else if (ans.equals("2")) {
	        	
	        	chemical.viewAllchemicals();
	        	
	        }else if (ans.equals("3")) {
	        	
	        	chemical.updateChemical();
	        	
	        }else if (ans.equals("4")){
	        	
	        	chemical.generateChemicalBills();
	        	
	        }else {
	        	
	        	System.out.println("ERROR! Invalid input entered. Please try again.");
	        	continue;
	        }
	        
	    }
		
	}

}
