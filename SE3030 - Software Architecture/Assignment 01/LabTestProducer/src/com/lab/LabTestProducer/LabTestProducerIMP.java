package com.lab.LabTestProducer;

import java.util.ArrayList;
import java.util.Scanner;

public class LabTestProducerIMP implements LabTestProducer{
   
private ArrayList<LabTestModel> tests;
	
	Scanner scan = new Scanner(System.in);
	
	private String[][] existingtests = {
			{"sugar","This test check the suger percentage","Rs.250.00"},
			{"cholestrolr","This test check the cholestrolr percentage","Rs.800.00"},
			{"Antigen","This test check the covid-19 positive or not","Rs.18900.00"},
			{"creatinine","This test check the suger percentage","Rs.12500.00"},
			
	};
	
	//Adding data to ArrayList when program started
	public LabTestProducerIMP() {
		
		
		tests = new ArrayList<LabTestModel>();
		
		for(int i = 0; i < 4;i++) {
			LabTestModel appModel = new LabTestModel(existingtests[i][0],existingtests[i][1],existingtests[i][2]);
			tests.add(appModel);
		}
		
		
	}
	
	
	// add new test to the system
	@Override
	public void addnewTest() {
		
		//tests = new ArrayList<LabTestModel>();
		
		
		
		char next = 'y';
		
		
		while(next == 'Y' || next == 'y') {
			
			LabTestModel test = new LabTestModel();
			
			System.out.println("Enter lab test name:");
			test.setTname(scan.nextLine());
			
			System.out.println("Enter lab test description:");
			test.setDescription(scan.nextLine());
			
			System.out.println("Enter lab test price:");
			test.setPrice(scan.nextLine());
			
			
			
			try {
				
				tests.add(test);
				System.out.println("**Test Added**");
				
			}catch(Exception t) {
				
				t.printStackTrace();
				System.out.println("Couldn't add this lab test");
				
			}
			
			
			
			do {
				
				System.out.println("Add another lab test?(Y/N)");
				next = scan.nextLine().charAt(0);
				
				if(next != 'n' && next != 'N' && next != 'y' && next != 'Y') {
					
					System.out.println("Invalid Input.");
				}
				
				}while(next != 'n' && next != 'N' && next != 'y' && next != 'Y');
		}
		
		
	}

	//display all lab Tests
	@Override
	public void viewAllTest() {
		
		System.out.println("========All details of lab tests========");
		 
		for(LabTestModel test: tests) {
			
			System.out.println("----------------------------------------");
			System.out.println("	LAB TEST NAME:-"+test.getTname());
			System.out.println("	LAB TEST DESCRIPTION:-"+test.getDescription());
			System.out.println("	LAB TEST PRICE:-"+test.getPrice());
			System.out.println("----------------------------------------"); 
			
		}
		
		System.out.println("========================================");
		
	}

	//search test by test name
	@Override
	public void searchTest() {
		
		int status = 0;
		String name;
		int found = 0;
		//int count = 0;
		char next = '1';
		
		LabTestProducerIMP newTmp = new LabTestProducerIMP();
		
		
		do {
		
		System.out.print("Enter lab test name to find details: ");
		name = scan.nextLine();
		
		//found =0;
		System.out.println("========Details of entered lab test========");
		for(LabTestModel test: tests) {
			
			if(test.getTname().equalsIgnoreCase(name)) {
				
				System.out.println("----------------------------------------");
				System.out.println("	LAB TEST NAME:-"+test.getTname());
				System.out.println("	LAB TEST DESCRIPTION:-"+test.getDescription());
				System.out.println("	LAB TEST PRICE:-"+test.getPrice());
				System.out.println("----------------------------------------");
				
				found =0;
				break;
				
				
			}else {
				
				
				found = 1;
			
			}
			
		}
		
		
		
		if(found == 0) {
			
			System.out.println("========================================");
			break;
		
		}
		
		if (found ==1) {
			
			System.out.println("\n\n\nLab test couldn't find ... Please Try agaian");
			
			
			
			do {
				
				System.out.println("\n1.Search again\n"+"3.Exit *(Select 1-2)*\n");
				System.out.println("========================================");
				next = scan.nextLine().charAt(0);
				
				
				
				if(next != '1' && next != '2') {
					
					System.out.println("Return back");
				}
				
				
				if(next == '1'){
					
					newTmp.searchTest();
					//newTmp.viewAllTest();
					
				}
				 
				if(next == '2'){
					status = 1;
					break;
					//newTmp.addnewTest();
					//newTmp.viewAllTest();
					
				}
				
				
				}while(next != '1' && next != '2' );
			
			
			if(status == 1) {
				break;
				
				
				
			}

			
		}	
		
		}while(next == '1' && found == 0 );
		
		
	}
	
	//update test Details
	public void updateTest() {
		String upTestName, update,number;
		
		
		System.out.println("======================Update Lab Test Details==================== "+"\n"); 

		System.out.println("1.Update test name " + "\n" + "2.Update test description " + "\n" +"3.Update test price *(Select 1-3)*");
		number = scan.nextLine();

		System.out.println("Enter Lab test name to update ");
		upTestName = scan.nextLine();
		
		int status=0;

		switch (number) {
		case "1":
			
            //update test name
			for (LabTestModel t : tests) {

				try {
					if (t.getTname().equalsIgnoreCase(upTestName)) {
						
						status=1;

						System.out.println("Enter new test name: ");
						update = scan.nextLine();
						t.setTname(update);
						System.out.println("");
						System.out.println("**Details Updated**"+"\n");

					}
				} catch (Exception ex) {
					ex.printStackTrace();
					System.out.println("Can not update the test name.Please try again !");
				}

			}
			break;

		case "2":
			
			//update test description
			for (LabTestModel t : tests) {

				try {
					if (t.getTname().equalsIgnoreCase(upTestName)) {
						
						status=1;

						System.out.println("Enter new description about test: ");
						update = scan.nextLine();
						t.setDescription(update);
						System.out.println("**Details Updated**");
					}
				} catch (Exception ex) {
					ex.printStackTrace();
					System.out.println("Can not update the description.Please try again !");
				}
			}
			break;
		case "3":
			
			//update test price
			for (LabTestModel t : tests) {

				try {
					if (t.getTname().equalsIgnoreCase(upTestName)) {
						
						status=1;

						System.out.println("Enter new price: ");
						update = scan.nextLine();
						t.setDescription(update);
						System.out.println("**Details Updated**");
					}
				} catch (Exception ex) {
					ex.printStackTrace();
					System.out.println("Can not update the price.Please try again !");
				}
			}
			break;

		default: {
			System.out.println("Invalid");
			break;
		}
		}if(status==0) {
			System.out.println("Can not find lab test to update!Try different name"+"\n");
		}

	}

	
}
