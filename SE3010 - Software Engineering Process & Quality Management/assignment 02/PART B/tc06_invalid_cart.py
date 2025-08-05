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

    print("[INFO] Logging in...")
    wait.until(EC.presence_of_element_located((By.ID, "user-name"))).send_keys("standard_user")
    driver.find_element(By.ID, "password").send_keys("secret_sauce")
    driver.find_element(By.ID, "login-button").click()

    print("[INFO] Opening cart without adding products...")
    wait.until(EC.element_to_be_clickable((By.CLASS_NAME, "shopping_cart_link"))).click()

    print("[INFO] Verifying cart is empty...")
    cart_items = driver.find_elements(By.CLASS_NAME, "cart_item")
    assert len(cart_items) == 0, "Cart is not empty"

    print(" TC06 - Invalid Cart Test Passed (Cart is empty)")
    driver.save_screenshot("screenshots/tc06_invalid_cart.png")

except Exception as e:
    print(" TC06 - Invalid Cart Test Failed")
    traceback.print_exc()
    driver.save_screenshot("screenshots/tc06_invalid_cart_error.png")

finally:
    driver.quit()
