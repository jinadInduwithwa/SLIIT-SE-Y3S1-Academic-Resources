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
    product_id = "add-to-cart-sauce-labs-backpack"
    wait.until(EC.element_to_be_clickable((By.ID, product_id))).click()

    print("[INFO] Going to cart...")
    wait.until(EC.element_to_be_clickable((By.CLASS_NAME, "shopping_cart_link"))).click()

    print("[INFO] Verifying product in cart...")
    cart_item = wait.until(EC.presence_of_element_located((By.CLASS_NAME, "inventory_item_name"))).text
    assert "Sauce Labs Backpack" in cart_item

    print(" TC05 - Valid Cart Test Passed")
    driver.save_screenshot("screenshots/tc05_valid_cart.png")

except Exception as e:
    print(" TC05 - Valid Cart Test Failed")
    traceback.print_exc()
    driver.save_screenshot("screenshots/tc05_valid_cart_error.png")

finally:
    driver.quit()
