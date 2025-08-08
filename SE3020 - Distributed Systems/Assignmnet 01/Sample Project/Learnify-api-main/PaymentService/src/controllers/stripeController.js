// Controls the payment flow
const Stripe = require("stripe");
// Load required keys
const stripe = Stripe(process.env.STRIPE_KEY);
const axios = require("axios");
const express = require("express");
const app = express();
require("dotenv").config();

const CreateCheckout = async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: req.body.name,
              images: [req.body.image],
            },
            unit_amount: req.body.price * 100,
          },
          quantity: req.body.quantity,
        },
      ],
      success_url: `${process.env.CLIENT_URL}course/${req.body.id}`,
      cancel_url: `${process.env.CLIENT_URL}`,
    });
    const response = await axios.post(`http://course:8002/enroll/`, {
      courseId: req.body.id,
      userId: req.body.userId,
    });

    console.log("res is", response);
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const WebhookEvent = async (req, res) => {
  const payload = req.body;

  try {
    // Verify the event by fetching it from Stripe gateway
    const event = await stripe.webhooks.constructEvent(
      req.rawBody, // You can use rawBody if using express-rawbody middleware
      req.headers["stripe-signature"],
      "your_webhook_secret_key"
    );

    // Handle the event based on its type
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object;
        // Perform actions with the session data (e.g., save payment details to your database)
        console.log("Payment successful:", session);
        break;
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Error handling webhook:", err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};

module.exports = { CreateCheckout, WebhookEvent };
