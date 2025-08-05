package com.lab.AppointmentProducer;


public class AppointmentModel {
	
	private String name,description,date,gender , testType , timeType,age,codeNumber;
	
	
	//default constructor
	public AppointmentModel() {}
    
	//overload constructor
	public AppointmentModel(String name, String description, String date, String gender, String testType,
			String timeType, String age,String codeNumber) {
		super();
		this.name = name;
		this.description = description;
		this.date = date;
		this.gender = gender;
		this.testType = testType;
		this.timeType = timeType;
		this.age = age;
		this.codeNumber= codeNumber;
	}

	
	//getters and setters
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getTestType() {
		return testType;
	}

	public void setTestType(String testType) {
		this.testType = testType;
	}

	public String getTimeType() {
		return timeType;
	}

	public void setTimeType(String timeType) {
		this.timeType = timeType;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	};
		
    
	public void setCodeNumber(String codeNumber) {
		
		this.codeNumber = codeNumber;
		
	}
	

	public String getCodeNumber() {
		
		return codeNumber;
		
	}

}