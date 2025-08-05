package com.lab.LoginProducer;

public class LoginModel {
	
	private String uName,pass;
	
	//default constructor
	public LoginModel() {
		
	}

	//getters and setters
	public String getuName() {
		return uName;
	}

	public void setuName(String uName) {
		this.uName = uName;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public LoginModel(String uName, String pass) {
		super();
		this.uName = uName;
		this.pass = pass;
	}
	
	


}
