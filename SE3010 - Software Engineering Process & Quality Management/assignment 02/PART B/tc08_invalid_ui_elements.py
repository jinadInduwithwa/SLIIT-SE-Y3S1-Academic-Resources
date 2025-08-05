from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from driver_setup import create_chrome_driver
import os
import traceback
from selenium.common.exceptions import TimeoutException

try:
    os.makedirs("screenshots", exist_ok=True)
    driver = create_chrome_driver()
    driver.get("https://www.saucedemo.com/")
    wait = WebDriverWait(driver, 10)

    print("[INFO] Trying to locate a non-existent element (simulate UI failure)...")
    try:
        wait.until(EC.visibility_of_element_located((By.ID, "fake-element-id")))  # invalid ID
    except TimeoutException:
        print("[INFO] Element not found as expected. Test passed.")

    print("TC08 - Invalid UI Test Passed (Missing element detected)")
    driver.save_screenshot("screenshots/tc08_invalid_ui_pass.png")

except Exception as e:
    print(" TC08 - Invalid UI Test Failed")
    traceback.print_exc()
    driver.save_screenshot("screenshots/tc08_invalid_ui_fail.png")

finally:
    driver.quit()
