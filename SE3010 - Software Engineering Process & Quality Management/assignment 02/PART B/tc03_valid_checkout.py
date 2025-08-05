from driver_setup import create_chrome_driver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import traceback

try:
    # Ensure screenshots folder exists
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

    print("[INFO] Filling in checkout info...")
    wait.until(EC.presence_of_element_located((By.ID, "first-name"))).send_keys("John")
    driver.find_element(By.ID, "last-name").send_keys("Doe")
    driver.find_element(By.ID, "postal-code").send_keys("12345")
    driver.find_element(By.ID, "continue").click()

    print("[INFO] Finishing checkout...")
    wait.until(EC.element_to_be_clickable((By.ID, "finish"))).click()

    print("[INFO] Verifying confirmation...")
    confirmation = wait.until(EC.visibility_of_element_located((By.CLASS_NAME, "complete-header"))).text
    assert "Thank you for your order!" in confirmation

    print(" TC03 - Valid Checkout Test Passed")
    driver.save_screenshot("screenshots/tc03_valid_checkout.png")

except Exception as e:
    print(" TC03 - Valid Checkout Test Failed")
    print("Error Traceback:")
    traceback.print_exc()  # Show full stack trace
    driver.save_screenshot("screenshots/tc03_valid_checkout_error.png")

finally:
    driver.quit()
