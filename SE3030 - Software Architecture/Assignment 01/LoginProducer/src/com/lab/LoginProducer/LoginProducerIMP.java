package com.lab.LoginProducer;

import java.util.ArrayList;
import java.util.Scanner;

public class LoginProducerIMP implements LoginProducer{

    //store username and passwords in string array
	private static final String[] USERNAMES = {"dasun", "jinad", "shani", "maleesha"};
	private static final String[] PASSWORDS = {"dasun@123", "jinad@123", "shani@123", "maleesha@123"};
	
	ArrayList<LoginModel> employee;
	Scanner scan;
	
	//Add username and password to arraylist
	public LoginProducerIMP() {
		
		scan = new Scanner(System.in);
		employee = new ArrayList<LoginModel>();
		
		for(int i = 0; i < 4; i++) {
			
			LoginModel empl = new LoginModel(USERNAMES[i],PASSWORDS[i]);
			
			employee.add(empl);
		}
		}

	@Override
	//login function
	public boolean employeeLogin() {
		while(true) {
			
			System.out.print("Enter Username: ");
			String uname = scan.next();
		
			System.out.print("Enter Password: ");
			String pass = scan.next();
			
			for(LoginModel emp: employee) {
				
				if(emp.getuName().equals(uname)) {
					
					if(emp.getPass().equals(pass)) {
						
						return true;
						
					}
				}
			}
			
			char again = 'x';
			
			while(again != 'n' && again != 'N' && again != 'y' && again != 'Y') {
				
				System.out.println("Invalid credentials.Try again?(Y/N)");
				again = scan.next().charAt(0);
				
				if(again != 'n' && again != 'N' && again != 'y' && again != 'Y') {
					
					System.out.println("Invalid input.");
				}
			}
			
			if(again == 'n' || again == 'N') return false;
		}
	}

}
