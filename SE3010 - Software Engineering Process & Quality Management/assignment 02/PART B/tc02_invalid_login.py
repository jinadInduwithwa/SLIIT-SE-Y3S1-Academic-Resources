from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import os

try:
    os.makedirs("screenshots", exist_ok=True)
    driver = webdriver.Chrome()
    driver.get("https://www.saucedemo.com/")

    # Enter invalid password
    driver.find_element(By.ID, "user-name").send_keys("standard_user")
    driver.find_element(By.ID, "password").send_keys("wrong_password")
    driver.find_element(By.ID, "login-button").click()

    time.sleep(2)

    error = driver.find_element(By.XPATH, "//h3[@data-test='error']").text
    assert "Epic sadface" in error or "Username and password do not match" in error
    print(" TC02 - Invalid Login Test Passed")

    driver.save_screenshot("screenshots/tc02_invalid_login.png")

except Exception as e:
    print(" TC02 - Invalid Login Test Failed")
    print("Error:", e)
    driver.save_screenshot("screenshots/tc02_invalid_login_error.png")

finally:
    driver.quit()
