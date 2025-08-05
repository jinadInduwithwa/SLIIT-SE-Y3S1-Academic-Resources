package com.lab.AppointmentProducer;

import java.util.ArrayList;
import java.util.*;
import java.time.format.DateTimeFormatter;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.time.LocalDateTime;  

public class AppointmentProducerIMP implements AppointmentProducer {
	
	
	private ArrayList<AppointmentModel> appointments;
	Scanner scn = new Scanner(System.in);
	
	//Get current date and TIME
	DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");
	DateTimeFormatter dtf1 = DateTimeFormatter.ofPattern("HH:mm:ss");
	LocalDateTime now = LocalDateTime.now();
	
	//String codeNumber = dtf1.format(now)+
	
	
	private String[][] existingAppointments = {
			{"Keshan_Madushanka","I want to check sugar level ","2025/03/01","Male","sugar","2.00 P.M.","22","Keshan_12:38:05"},
			{"Sarithmal_Silva","I want to check cholesterol ","2025/03/02","Male","cholestrolr","3.00 P.M.","23","Sarithmal_9:38:05"},
			{"Shani_maduwanthi","I want to check rapid antigen  ","2025/03/02","Female","Antigen","4.00 P.M.","26","Shani_12:38:05"},
			{"Maleesha_wasana","I want appointment in afternoon ","2025/03/03","Female","sugar","3.00 P.M.","26","Maleesha_9:38:05"},
			{"Keheliya_perera","I want appointment in morning ","2025/03/03","Male","sugar","1.00 P.M.","25","Keheliya_12:38:05"},
			{"Dalas_prasanna","I wanr check my previous report  ","2025/03/05","Male","","5.00 P.M.","21","Dalas_10:28:05"},
			{"Jagath_Madushanka","I want to check creatinine ","2025/03/03","Male","creatinine","3.00 P.M.","23","Jagath_10:02:05"},
			
	};
	
	//Adding data to ArrayList when program started
	public AppointmentProducerIMP() {
		
		
		appointments = new ArrayList<AppointmentModel>();
		
		for(int k = 0; k < 7;k++) {
			AppointmentModel appModel = new AppointmentModel(existingAppointments[k][0],existingAppointments[k][1],existingAppointments[k][2],existingAppointments[k][3],existingAppointments[k][4],existingAppointments[k][5],existingAppointments[k][6],existingAppointments[k][7]);
			appointments.add(appModel);
		}
		
		
	}
	
    // Add new Appointment 
	@Override
	public void addAppointment() {
		
		   
		   BufferedReader buffin  = new BufferedReader(new InputStreamReader(System.in));
		    	
		
			AppointmentModel newappoint = new AppointmentModel();
			
			System.out.println(" ");
			System.out.print(" Please Enter Your Name :  ");
			
			try {
			      newappoint.setName(buffin.readLine());
			      
			}catch (IOException e) {
				 e.printStackTrace();
				
			}
			
			System.out.println(" ");
			System.out.print(" Please Enter Description about appointment :  ");
			try {
			      newappoint.setDescription(buffin.readLine());
			      
			}catch (IOException e) {
				 e.printStackTrace();
				
			}
			
			System.out.println(" ");
			System.out.print(" Please Enter Your Age :  ");
			try {
			      newappoint.setAge(buffin.readLine());
			      
			}catch (IOException e) {
				 e.printStackTrace();
				
			}
			
			
			//get date 
			newappoint.setDate(dtf.format(now));
			
			//generate codeNumber
			newappoint.setCodeNumber(newappoint.getName()+"_"+dtf1.format(now));
			
			 while(true) {
			
				System.out.println("------------- ");
				System.out.println(" 1: Male");
				System.out.println(" 2:Female");
				System.out.println("------------- ");
				System.out.print(" Please Select Gender Type :");
		   
		    
		        
		        	 
		        	 int genderType = scn.nextInt();    
		        	 if(genderType >2){
			        	   
			        	   System.out.println("Incorrect Gender Type ! Pls Try again");
			        	   continue;
			           }
		        	 

			           if(genderType == 1 ) {
			        	   
			        	   newappoint.setGender("Male");
			           }else if(genderType == 2){
			        	   
			        	   newappoint.setGender("Female");
			           }
			           
			           //check valid gender type is selected or not
			           if(genderType >0 && genderType <3){
			        	   
			        	   break;
		                }	 
		      }
			 
			 //select Test 	Type
			 while(true) {
	        	 
		         
		         System.out.println(" ");
		         System.out.println("----------------- ");
		         
		         System.out.println(" 1:Sugar Test");
				 System.out.println(" 2:Lipid Test");
				 System.out.println(" 3:creatinine Test");
				 System.out.println(" 4:urine Test");
				 System.out.println(" 5:Antigen Test");
				 System.out.println(" 6:dengue Test");
				 System.out.print(" Please Select the test Type :");
				 
		         
		         int TestType = scn.nextInt();
		         System.out.println(" ");
				 System.out.println("----------------- ");
		        

			           if(TestType == 1 ) {
			        	   
			        	   newappoint.setTestType("Sugar");
			        	   
			           }else if(TestType == 2){
			        	   
			        	   newappoint.setTestType("Lipid");
			        	   
			           }else if(TestType == 3 ) {
			        	   
			        	   newappoint.setTestType("creatinine");
			        	   
			           }else if(TestType == 4){
			        	   
			        	   newappoint.setTestType("urine");
			        	   
			           }else if(TestType == 5 ) {
			        	   
			        	   newappoint.setTestType("Antigen");
			        	   
			           }else if(TestType == 6){
			        	   
			        	   newappoint.setTestType("dengue");
			        	   
			           }
			           
			           
			           if(TestType >0 && TestType <7){
			        	   
			        	   break;
			        	   
			           }else {
			        	   
			        	   System.out.println("Incorrect Test Type ! Pls Try again");
			           }
		        	 
		        	 
		         }
			 
			 //select Appointment Time
			 while(true) {
				 
		         
		         System.out.println(" ");
		         System.out.println("------------------ ");
		         
		         System.out.println(" 1:- 10.00 A.M.");
				 System.out.println(" 2:- 3.00 P.M.");
				 System.out.println(" 3:- 5.00 P.M.");
				 System.out.println(" 4:- Request for different time for appointment ");
				 System.out.println("------------------ ");
                 System.out.print(" Please Select the option  :");
		         
		         int TimeType = scn.nextInt();
		         
		         System.out.println(" ");	        	 

			           if(TimeType == 1 ) {
			        	   
			        	   newappoint.setTimeType("10.00 A.M.");
			        	   
			           }else if(TimeType == 2){
			        	   
			        	   newappoint.setTimeType("3.00 A.M.");
			           }else if(TimeType == 3 ) {
			        	   
			        	   newappoint.setTimeType("10.00 A.M.");
			        	   
			           }else if(TimeType == 4){
			        	   
			        	   // request different time for appointment
			        	   System.out.print(" Pls select the appropriate time for the appointment : ");
			        	   String newTime = scn.next();
			        	   newappoint.setTimeType(newTime);
			           }
			           
			           if(TimeType >0 && TimeType <5){
			        	   
			        	   break;
			           }else {
			        	   
			        	   System.out.println("Incorrect Type ! Pls Try again");
			           }
		        	 
		        	 
		         }
		         
		         try {
		        	 
		        	 appointments.add(newappoint);
		        	 System.out.println("\n=====================================\n");
		        	 System.out.println(" Appointment Added successfully");
		        	 System.out.println("\n \n=====================================");
		        	 
		         }catch (Exception e) {
		        	 
		        	 e.printStackTrace();
		        	 System.out.println("Error occured while adding Appointment ! pls try agaian");
		         }
			
   }
    
	//Display All Appointments 
	@Override
	public void displayAppointment() {
		
		System.out.println("------ All Appointments ------");
		
		System.out.println("====================================\n\n");
		
        for(AppointmentModel app: appointments) {
			
        	System.out.println("                                  ");
        	System.out.println("CodeNumber : " + app.getCodeNumber());
        	System.out.println("Name : " + app.getName());
			System.out.println("Description : " + app.getDescription());
			System.out.println("Age : " + app.getAge());
			System.out.println("Gender : "+app.getGender());
			System.out.println("Date :" + app.getDate());
			System.out.println("Test Type : "+app.getTestType());
			System.out.println("Time " + app.getTimeType());
			System.out.println("====================================\n\n");
			
		}
		
		
	}
    
	// Search Appointment by Name or Test Type
	@Override
	public void searchAppointment() {
		
		
				String name,TestType;
				
				System.out.println("1: Search by name");
				System.out.println("2: Search by TestType");
				System.out.print("select an option  :");
                int select = scn.nextInt();
                
                // search by name
                if(select  == 1) {
                	
                	System.out.print("Enter Appointer's  name: ");
    				name = scn.next();
    				
    				for(AppointmentModel app: appointments) {
    					
    					if(app.getName().equalsIgnoreCase(name)) {
    						
    						System.out.println("\n\n\n---Appointment---");
    						System.out.println("-----------------------------------");
    						
    						System.out.println("CodeNumber : " + app.getCodeNumber());
    						System.out.println("Name : " + app.getName());
    						System.out.println("Description : " + app.getDescription());
    						System.out.println("Age : " + app.getAge());
    						System.out.println("Gender : "+app.getGender());
    						System.out.println("Date :" + app.getDate());
    						System.out.println("Test Type : "+app.getTestType());
    						System.out.println("Time " + app.getTimeType());
    						
    						System.out.println("-----------------------------------");
    					}
    					
    				}
                
    			//search by Test Type
                }else if(select == 2){
                	
                	System.out.print("Enter Test Type: ");
    				TestType = scn.next();
    				
    				System.out.println("");
					System.out.println("---Appointment---");
    				
    				for(AppointmentModel app: appointments) {
    					
    					
    					
    					if(app.getTestType().equalsIgnoreCase(TestType)) {
    						
    						
    						System.out.println("-----------------------------------");
    						
    						System.out.println("CodeNumber : " + app.getCodeNumber());
    						System.out.println("Name : " + app.getName());
    						System.out.println("Description : " + app.getDescription());
    						System.out.println("Age : " + app.getAge());
    						System.out.println("Gender : "+app.getGender());
    						System.out.println("Date :" + app.getDate());
    						System.out.println("Test Type : "+app.getTestType());
    						System.out.println("Time " + app.getTimeType());
    						
    						
    						System.out.println("-----------------------------------");
    					}
    					
    				}
                	
                }else if(select < 0 || select >2) {
                	System.out.println("-----------------------------------\n\n");
                	System.out.println("Invalid Type ... Pls Try Again Later ");
                	System.out.println("\n\n-----------------------------------");
                	
                }	
	}

    // Generate Bill for Appointment
	@Override
	public void generateAppointmentBills() {
		
		 String codenumber,testType = " ";
		 double temp =0;
		 double total = 0,bookingPrice = 0;
		
		
		System.out.print("Enter the Code Number : ");
		codenumber = scn.next();
		
		System.out.println("");
		
		for(AppointmentModel app: appointments) {
			
			if(app.getCodeNumber().equalsIgnoreCase(codenumber)) {
						
				testType = app.getTestType();
				
			}
			
		}
		System.out.println(" ");
		System.out.println("------ Price List ------");
		   System.out.println(" Sugar Test : Rs.250.00 ");
		   System.out.println(" Lipid Test : Rs.850.00 ");
		   System.out.println(" creatinine Test : Rs.1250.00 ");
		   System.out.println(" urine Test : Rs.280.00 ");
		   System.out.println(" Antigen Test : Rs.1890.00 ");
		   System.out.println(" dengue Test : Rs.2000.00 ");
		   
		   
		   if(testType.equalsIgnoreCase("Sugar")) {
        	   
        	    temp = 250.00;
        	   
           }else if(testType.equalsIgnoreCase("Lipid")){
        	   
        	    temp = 850.00; 
        	   
           }else if(testType.equalsIgnoreCase("creatinine") ) {
        	   
        	   temp = 1250.00; 
        	   
           }else if(testType.equalsIgnoreCase("urine")){
        	   
        	   temp = 280.00; 
        	   
           }else if(testType.equalsIgnoreCase("Antigen") ) {
        	   
        	   temp = 1890.00; 
        	   
           }else if(testType.equalsIgnoreCase("dengue")){
        	   
        	   temp = 2000.00; 
        	   
           }
		   
		   bookingPrice = 110.00;
		   
		   total = bookingPrice + temp;
		   
		   System.out.println("======================================== ");
		   System.out.println(" ");
		   System.out.println(" Appointment Bill for : "+ codenumber  );
		   System.out.println(" ");
		   System.out.println("======================================== ");
		   System.out.println(" Booking Price : " + bookingPrice);
		   System.out.println(" "+testType + " Test Price : " + temp);
		   System.out.println("==============");
		   System.out.println(" Total Bill : " + total);
		   System.out.println("==============");
		
	}
	
  
}
