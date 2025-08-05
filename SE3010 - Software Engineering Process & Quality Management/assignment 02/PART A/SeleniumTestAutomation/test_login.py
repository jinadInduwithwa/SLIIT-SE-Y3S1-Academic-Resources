from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import pytest

@pytest.fixture
def driver():
    # Path to chromedriver.exe in your project folder
    service = Service("D:/Y3 S1/SEP - QM/assignment 02/SeleniumTestAutomation/chromedriver.exe")
    driver = webdriver.Chrome(service=service)
    driver.get("https://www.saucedemo.com/")
    yield driver
    driver.quit()

# TC01: Valid Login (Functional, Valid)
def test_valid_login(driver):
    driver.find_element(By.ID, "user-name").send_keys("standard_user")
    driver.find_element(By.ID, "password").send_keys("secret_sauce")
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "login-button"))).click()
    driver.save_screenshot("screenshots/valid_login_screenshot.png")
    assert driver.current_url == "https://www.saucedemo.com/inventory.html", "Valid login failed"

# TC02: Invalid Login - Wrong Password (Functional, Invalid)
def test_invalid_login_wrong_password(driver):
    driver.find_element(By.ID, "user-name").send_keys("standard_user")
    driver.find_element(By.ID, "password").send_keys("wrong_password")
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "login-button"))).click()
    error = driver.find_element(By.CSS_SELECTOR, "h3[data-test='error']").text
    driver.save_screenshot("screenshots/invalid_login_wrong_password_screenshot.png")
    assert "Username and password do not match" in error, "Invalid login error not displayed"

# TC03: Invalid Login - Empty Username (Functional, Invalid)
def test_invalid_login_empty_username(driver):
    driver.find_element(By.ID, "password").send_keys("secret_sauce")
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "login-button"))).click()
    error = driver.find_element(By.CSS_SELECTOR, "h3[data-test='error']").text
    driver.save_screenshot("screenshots/invalid_login_empty_username_screenshot.png")
    assert "Username is required" in error, "Empty username error not displayed"

# TC04: Verify Login Button Visibility (UI, Valid)
def test_button_visibility(driver):
    button = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.ID, "login-button")))
    driver.save_screenshot("screenshots/button_visibility_screenshot.png")
    assert button.is_displayed(), "Login button is not visible"

# TC05: Verify Adding Item to Cart (Functional, Valid)
def test_add_to_cart(driver):
    driver.find_element(By.ID, "user-name").send_keys("standard_user")
    driver.find_element(By.ID, "password").send_keys("secret_sauce")
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "login-button"))).click()
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID, "add-to-cart-sauce-labs-backpack"))).click()
    badge = driver.find_element(By.CLASS_NAME, "shopping_cart_badge").text
    driver.save_screenshot("screenshots/add_to_cart_screenshot.png")
    assert badge == "1", "Item not added to cart"

# TC06: Invalid Cart Addition - Add Item Without Login (UI/Functional, Invalid)
def test_add_to_cart_without_login(driver):
    driver.get("https://www.saucedemo.com/inventory.html")
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "login-button")))
    driver.save_screenshot("screenshots/add_to_cart_without_login_screenshot.png")
    assert driver.current_url == "https://www.saucedemo.com/", "Not redirected to login page"