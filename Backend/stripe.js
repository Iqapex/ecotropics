const express = require("express");
const { stripe } = require("./config/stripe");

const router = express.Router();

// Create Payment Intent
router.post("/create-payment-intent", async (req, res) => {
    try {
        const { amount, currency } = req.body; // amount in cents
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Stripe Error:", error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
