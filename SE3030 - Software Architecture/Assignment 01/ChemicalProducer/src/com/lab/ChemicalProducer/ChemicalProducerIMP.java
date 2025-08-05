package com.lab.ChemicalProducer;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Scanner;

public class ChemicalProducerIMP implements ChemicalProducer{
	
	private ArrayList<ChemicalModel> chemicals;
	
	Scanner scan;
	
	private String[][] exhistingchemicals = {
			{"CREATININE","BASF","20","04/01/2025","04/01/2026","2500"},
			{"HYDROCHLORIC_ACID","DowDuPont","30","04/02/2025","04/01/2026","5000"},
			{"NITRIC_ACID","Sinopec","50","02/03/2025","02/04/2026","2000"},
			{"SULPHURIC_ACID","SABIC","10","01/03/2025","01/03/2026","3000"},
			{"SODIUM_HYDROXIDE","ExxonMobil","20","14/2/2025","14/11/2026","3500"},
			};
	
	//Adding data to ArrayList when program started
	public ChemicalProducerIMP(){
		
		scan = new Scanner(System.in);
		
		chemicals = new ArrayList<ChemicalModel>();
		
		for(int i = 0; i < 5;i++) {
			ChemicalModel chemical = new ChemicalModel(exhistingchemicals[i][0],exhistingchemicals[i][1],exhistingchemicals[i][2],exhistingchemicals[i][3],exhistingchemicals[i][4],exhistingchemicals[i][5]);
			chemicals.add(chemical);
		}
		
	}
	
	//addchemical method
	@Override
	public void addchemical() {
		
		
		
		char check = 'y';
		
		while(check == 'y' || check == 'Y') {
			 BufferedReader buffin  = new BufferedReader(new InputStreamReader(System.in));
			ChemicalModel chem = new ChemicalModel();
			
			System.out.print("Enter the name of chemical : ");
			try {
				chem.setName(buffin.readLine());
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			
			System.out.print("Enter the brnad name of the selected chemical : ");
			
			try {
				chem.setBrand(buffin.readLine());
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			
			System.out.print("Enter the quantity of the chemical added : ");
			try {
				chem.setQuantity(buffin.readLine());
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			System.out.print("Enter the manufacutred date(DD/MM/YYYY) : ");
			
			try {
				chem.setMfcDate(buffin.readLine());
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			
			System.out.print("Enter the expired date(DD/MM/YYYY) : ");
			try {
				chem.setExpDate(buffin.readLine());
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			
			System.out.print("Enter the price of the selected chemical : ");
			try {
				chem.setPrice(buffin.readLine());
				
			} catch (Exception e) {
				e.printStackTrace();
			}
			
			try {
				
				chemicals.add(chem);
				System.out.println("");
				System.out.println("Chemical Added Successfully.\n");
				
			}catch(Exception e) {
				
				e.printStackTrace();
				System.out.println("Error occured while adding chemical. Please try again.");
			}
			
			System.out.print("Do you want to add another chemical?(Y/N)");
			
			try {
				check = (char) buffin.read();
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		
	}
    
	//View chemical details method
	@Override
	public void viewAllchemicals() {
		
		System.out.println("1.View selected chemical detail");
		System.out.println("2.View all chemical details\n");
		System.out.print("Select option : ");
		int ans = scan.nextInt();
		
		// search using chemical name
		if (ans == 1) {
			
			String chename;
			
			System.out.println("Enter Chemical name: ");
			chename = scan.next();
			
			for(ChemicalModel che: chemicals) {
				
				try {
				if(che.getName().equalsIgnoreCase(chename)) {
					
					System.out.println("Details about the Entered chemical");
					System.out.println("================================");
					System.out.println("                                ");
					System.out.println("Chemical Name : " + che.getName());
					System.out.println("Chemical Brand : "+che.getBrand());
					System.out.println("Qunatity of the chemical : " +che.getQuantity());
					System.out.println("Manufactured Date : " +che.getMfcDate());
					System.out.println("Expire Date : " +che.getExpDate());
					System.out.println("Chemical Price : " +che.getPrice());
					System.out.println("                                ");
					System.out.println("================================");
					
				}
				}catch (Exception ex) {
					ex.printStackTrace();
					System.out.println("ERROR! Couldn't find the selected chemical. Please try again");
				}
			}
			
		}
		else {
		
		//display details of chemical 
		System.out.println("Details of all the chemicals in the Laboratory");
		System.out.println("================================");
		
		for(ChemicalModel che: chemicals) {
			System.out.println("                                ");
			System.out.println("Chemical Name : " + che.getName());
			System.out.println("Chemical Brand : " +che.getBrand());
			System.out.println("Qunatity of the chemical : " +che.getQuantity());
			System.out.println("Manufactured Date : " +che.getMfcDate());
			System.out.println("Expire Date : " +che.getExpDate());
			System.out.println("Chemical Price : " +che.getPrice());
			
			System.out.println("================================");
		}
		}
	}
    
	//Generate chemical bill method 
	@Override
	public void generateChemicalBills() {
		
		String chemnme;
		int quantity = 0,chemprice = 0;
		float total=0,unprice=0;
		
		System.out.print("Enter the chemical name : ");
		chemnme = scan.next();
		
		for(ChemicalModel che: chemicals) {
			
			if(che.getName().equalsIgnoreCase(chemnme)) {
				chemprice = Integer.parseInt(che.getPrice());
				quantity = Integer.parseInt(che.getQuantity());
				unprice = Integer.parseInt(che.getPrice());
			}
			}
		total = (chemprice*quantity);
		
		System.out.println("====== Chemical-Bill ======");
		System.out.println("");
		System.out.println("Name \t\t:"+chemnme);
		System.out.println("Qunatity \t:"+quantity);
		System.out.println("Unit Price \t:"+unprice);
		System.out.println("Total Price \t:"+total);
		System.out.println("");
		System.out.println("=========== **** ===========");
	}

	
	//update chemical details method
	@Override
	public void updateChemical() {
		String updateName, update;
		int num;
		
		while(true) {
		
		System.out.println("========= Update Chemical Details ======== "+"\n"); 

		System.out.print("1.Update Chemical Quantity\n");
		System.out.print("2.Update Chemical Brand\n");
		System.out.print("3.Update Chemical Unnit Price\n");
		
		num = scan.nextInt();
		
        if(num <0 || num >3){
        	break;
         }

		System.out.println("Enter chemical name to update : ");
		updateName = scan.next();
		
		int status=0;
		
		if(num == 1) {
			for (ChemicalModel che: chemicals) {

				try {
					if (che.getName().equalsIgnoreCase(updateName)) {
						
						status=1;

						System.out.println("Enter the new chemical quantity : ");
						update = scan.next();
						che.setQuantity(update);
						System.out.println("");
						System.out.println("Chemical Name Updated Successfully\n");

					}
				} catch (Exception ex) {
					ex.printStackTrace();
					System.out.println("ERROR! Couldn't update selected chemical name. Please try again !");
				}

			}
		}
		else if (num == 2) {
			
			for (ChemicalModel che: chemicals) {

				try {
					if (che.getName().equalsIgnoreCase(updateName)) {
						
						status=1;

						System.out.println("Enter new chemical brand name ");
						update = scan.next();
						che.setBrand(update);
						System.out.println("");
						System.out.println("Chemical Brand Updated Successfully\n");

					}
				} catch (Exception ex) {
					ex.printStackTrace();
					System.out.println("ERROR! Couldn't update selected chemical brand. Please try again !");
				}

			}
			
		}
		else if(num == 3) {
			
			for (ChemicalModel che: chemicals) {

				try {
					if (che.getName().equalsIgnoreCase(updateName)) {
						
						status=1;

						System.out.println("Enter new chemical unit price ");
						update = scan.next();
						che.setPrice(update);
						System.out.println("");
						System.out.println("Chemical Unit Price Updated Successfully\n");

					}
				} catch (Exception ex) {
					ex.printStackTrace();
					System.out.println("ERROR! Couldn't update selected chemical price. Please try again !");
				}

			}
			
		}
		else {
			System.out.println("Invalid input");
		}if(status==0) {
			System.out.println("Can not find the relavant find chemical name! Try different name"+"\n");
		}
		
	}
	}

}
