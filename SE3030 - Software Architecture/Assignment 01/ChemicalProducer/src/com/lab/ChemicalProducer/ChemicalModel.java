package com.lab.ChemicalProducer;


public class ChemicalModel {

	private String name,brand,quantity,mfcDate,expDate,price;
	
	//default constructor
	public ChemicalModel() {}
    
	//overload constructor 
	public ChemicalModel(String name, String brand, String quantity, String mfcDate, String expDate, String price) {
		super();
		this.name = name;
		this.brand = brand;
		this.quantity = quantity;
		this.mfcDate = mfcDate;
		this.expDate = expDate;
		this.price = price;
	}

	//getters and setters 
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getMfcDate() {
		return mfcDate;
	}

	public void setMfcDate(String mfcDate) {
		this.mfcDate = mfcDate;
	}

	public String getExpDate() {
		return expDate;
	}

	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
	
	
}
