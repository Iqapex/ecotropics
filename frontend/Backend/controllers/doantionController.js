// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// exports.processDonation = async (req, res) => {
//     const { amount, currency, token } = req.body;

//     try {
//         const charge = await stripe.charges.create({
//             amount: amount * 100, // Convert to smallest currency unit
//             currency,
//             source: token,
//             description: 'Donation Payment',
//         });

//         res.status(200).json({ message: 'Payment successful', charge });
//     } catch (error) {
//         res.status(500).json({ error: 'Payment failed', details: error });
//     }
// };
