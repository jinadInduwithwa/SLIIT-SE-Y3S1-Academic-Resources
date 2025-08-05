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

    print("[INFO] Adding product to cart...")
    wait.until(EC.element_to_be_clickable((By.ID, "add-to-cart-sauce-labs-backpack"))).click()

    print("[INFO] Going to cart...")
    wait.until(EC.element_to_be_clickable((By.CLASS_NAME, "shopping_cart_link"))).click()

    print("[INFO] Proceeding to checkout...")
    wait.until(EC.element_to_be_clickable((By.ID, "checkout"))).click()

    print("[INFO] Submitting empty checkout form...")
    wait.until(EC.element_to_be_clickable((By.ID, "continue"))).click()

    print("[INFO] Checking for error message...")
    error = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "error-message-container"))).text
    assert "Error: First Name is required" in error

    print(" TC04 - Invalid Checkout Test Passed")
    driver.save_screenshot("screenshots/tc04_invalid_checkout.png")

except Exception as e:
    print(" TC04 - Invalid Checkout Test Failed")
    print("Error Traceback:")
    traceback.print_exc()
    driver.save_screenshot("screenshots/tc04_invalid_checkout_error.png")

finally:
    driver.quit()
