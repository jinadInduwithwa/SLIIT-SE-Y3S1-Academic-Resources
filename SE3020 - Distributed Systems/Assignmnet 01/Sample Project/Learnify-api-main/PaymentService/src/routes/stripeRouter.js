const express = require("express");
const StripeController = require("../controllers/stripeController");

const router = express.Router();

router.post("/create-checkout-session", StripeController.CreateCheckout);

// Create order function

module.exports = router;
