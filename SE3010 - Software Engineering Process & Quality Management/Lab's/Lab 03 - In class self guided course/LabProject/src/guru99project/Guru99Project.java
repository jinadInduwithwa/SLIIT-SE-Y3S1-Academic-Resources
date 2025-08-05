package guru99project;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Guru99Project {
	ChromeDriver driver;
	String url = "https://demo.guru99.com/test/login.html";
	
	public void invokeBrowser(){
		System.setProperty("webdriver.chrome.driver", "D:\\Y3 S1\\SEP - QM\\Lab 03\\lib");
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.get(url);
	}
	
	public void login(){
		WebElement usernameElement = driver.findElement(By.name("email"));
		usernameElement.sendKeys("mngr614464");
		
		WebElement passwordElement = driver.findElement(By.name("passwd"));
		passwordElement.sendKeys("Azudabu");
		
		driver.findElement(By.name("SubmitLogin")).click();
	}
	

}
