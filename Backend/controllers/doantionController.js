// controllers/donationController.js
const Donation = require('../Models/Donation'); // Import the Donation model (if you are using a database)
const nodemailer = require('nodemailer'); // Optional: to send confirmation emails after donation

const createDonation = async (req, res) => {
  const { name, email, amount, message } = req.body;

  try {
    // Save the donation to the database
    const newDonation = new Donation({
      name,
      email,
      amount,
      message,
    });

    await newDonation.save();

    // Send email confirmation (optional)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use the email service of your choice
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or application-specific password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for your donation!',
      text: `Dear ${name},\n\nThank you for your generous donation of $${amount}.\n\nYour message: ${message}\n\nBest regards,\nThe Team`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Donation received successfully, and confirmation sent.' });
  } catch (error) {
    console.error('Error processing donation:', error);
    res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};

module.exports = {
  createDonation,
};
