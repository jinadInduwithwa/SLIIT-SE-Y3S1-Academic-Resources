import subprocess

test_scripts = [
    "tc01_valid_login.py",
    "tc02_invalid_login.py",
    "tc03_valid_checkout.py",
    "tc04_invalid_checkout.py",
    "tc05_valid_cart.py",
    "tc06_invalid_cart.py",
    "tc07_valid_ui_elements.py",
    "tc08_invalid_ui_elements.py"
]

for script in test_scripts:
    print(f"\nRunning {script}...")
    subprocess.run(["python", script])
