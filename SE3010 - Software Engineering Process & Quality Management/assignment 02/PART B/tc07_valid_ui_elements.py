from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from driver_setup import create_chrome_driver
import os
import traceback

try:
    os.makedirs("screenshots", exist_ok=True)
    driver = create_chrome_driver()
    driver.get("https://www.saucedemo.com/")
    wait = WebDriverWait(driver, 10)

    print("[INFO] Verifying login page title...")
    assert "Swag Labs" in driver.title

    print("[INFO] Checking username field...")
    username = wait.until(EC.visibility_of_element_located((By.ID, "user-name")))
    assert username.is_displayed() and username.is_enabled()

    print("[INFO] Checking password field...")
    password = driver.find_element(By.ID, "password")
    assert password.is_displayed() and password.is_enabled()

    print("[INFO] Checking login button...")
    login_btn = driver.find_element(By.ID, "login-button")
    assert login_btn.is_displayed() and login_btn.is_enabled()

    print(" TC07 - Valid UI Elements Test Passed")
    driver.save_screenshot("screenshots/tc07_valid_ui.png")

except Exception as e:
    print(" TC07 - Valid UI Elements Test Failed")
    traceback.print_exc()
    driver.save_screenshot("screenshots/tc07_valid_ui_error.png")

finally:
    driver.quit()
