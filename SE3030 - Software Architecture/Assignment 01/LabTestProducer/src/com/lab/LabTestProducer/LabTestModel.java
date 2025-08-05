package com.lab.LabTestProducer;

public class LabTestModel {

	private String tname, description, price;

	//overload constructor
	public LabTestModel(String tname, String description, String price) {
		super();
		this.tname = tname;
		this.description = description;
		this.price = price;
	}

	//default constructor
	public LabTestModel() {
		
	}

	//getters and setters
	public String getTname() {
		return tname;
	}

	public void setTname(String tname) {
		this.tname = tname;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
	
	
}
