package com.lab.TestReportProducer;

public class TestReportModel {
	
private String id,testName,patientName,testStatus,description,date;
	
    //default constructor
	public TestReportModel() {}

	//overload constructor
	public TestReportModel(String id, String testName, String patientName, String testStatus, String description,
			String date) {
		super();
		this.id = id;
		this.testName = testName;
		this.patientName = patientName;
		this.testStatus = testStatus;
		this.description = description;
		this.date = date;
	}

	//getters and setters
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTestName() {
		return testName;
	}

	public void setTestName(String testName) {
		this.testName = testName;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getTestStatus() {
		return testStatus;
	}

	public void setTestStatus(String testStatus) {
		this.testStatus = testStatus;
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
	


}
