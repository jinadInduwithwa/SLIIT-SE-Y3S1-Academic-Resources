from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import os

try:
    os.makedirs("screenshots", exist_ok=True)
    driver = webdriver.Chrome()
    driver.get("https://www.saucedemo.com/")

    # Enter valid credentials
    driver.find_element(By.ID, "user-name").send_keys("standard_user")
    driver.find_element(By.ID, "password").send_keys("secret_sauce")
    driver.find_element(By.ID, "login-button").click()

    time.sleep(2)

    # Check if login was successful
    assert "Products" in driver.page_source
    print(" TC01 - Valid Login Test Passed")

    driver.save_screenshot("screenshots/tc01_valid_login.png")

except Exception as e:
    print(" TC01 - Valid Login Test Failed")
    print("Error:", e)
    driver.save_screenshot("screenshots/tc01_valid_login_error.png")

finally:
    driver.quit()
