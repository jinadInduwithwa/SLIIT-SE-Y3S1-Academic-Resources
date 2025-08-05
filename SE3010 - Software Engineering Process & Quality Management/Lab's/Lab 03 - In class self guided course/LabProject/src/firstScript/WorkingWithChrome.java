package firstScript;

import org.openqa.selenium.chrome.ChromeDriver;


public class WorkingWithChrome {
	ChromeDriver driver;
	String url =  "https://www.w3schools.com/";
	public void invokeBrowser(){
		System.setProperty("webdriver.chrome.driver", "D:\\Y3 S1\\SEP - QM\\Lab 03\\lib");
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.get(url);
	}
	
	public void closeBrowser(){
		driver.quit();
	}
	
	public static void main(String[] args) {
		WorkingWithChrome wc = new WorkingWithChrome();
		wc.invokeBrowser();
		wc.closeBrowser();
	}
}
