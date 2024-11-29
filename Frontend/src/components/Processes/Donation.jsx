import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Donation.css";

const stripePromise = loadStripe("pk_test_51QQRVrLu9OXlRS4z7rmnNjsLckPVZ7QSUi5qRUKf0fY6z3HfTN8mti5DtzyPvlYXsteN6ju8HtTjoqJqGDIXkswx00pKdjnoEh"); // Replace with your Stripe publishable key

const DonationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });
  const stripe = useStripe();
  const elements = useElements();
  const [isCardVisible, setIsCardVisible] = useState(false); // Control CardElement visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "amount" && value > 0) {
      setIsCardVisible(true); // Show CardElement when a valid amount is entered
    } else if (name === "amount" && value <= 0) {
      setIsCardVisible(false); // Hide CardElement if amount is invalid
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      alert("Stripe is not loaded yet.");
      return;
    }

    const response = await fetch("https://zamsof.onrender.com/api/stripe/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: formData.amount * 100, currency: "usd" }), // Convert amount to cents
    });

    const { clientSecret } = await response.json();

    const cardElement = elements.getElement(CardElement);
    const { error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
        },
      },
    });

    if (error) {
      alert(error.message);
    } else {
      // Payment succeeded, send donation data to your server
      await fetch("http://localhost:5000/api/donation/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      alert("Thank you for your generous donation!");
      onClose(); // Close the donation form
    }
  };

  return (
    <form className="popup-form" onSubmit={handleSubmit}>
      <h2>Donate Now</h2>
      <div className="info">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Donation Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter donation amount"
            required
          />
        </div>
      </div>
      {isCardVisible && (
        <div className="form-group">
          <label htmlFor="card">Card Details</label>
          <CardElement
            options={{
              style: {
                base: {
                  padding:"5px",
                  fontSize: "16px",
                  color: "#32325d",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#fa755a",
                  iconColor: "#fa755a",
                },
              },
            }}
          />
        </div>
      )}
      <div className="form-group full-width">
        <label htmlFor="message">Message (Optional)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your message here"
        />
      </div>
      <div className="form-btn">
        <button type="submit" className="submit-btn" disabled={!stripe || (isCardVisible && !formData.amount)}>
          Donate
        </button>
      </div>
    </form>
  );
};

const Donation = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control the visibility of the donation form

  const handleClose = () => {
    setIsOpen(false); // Close the donation form
  };

  return (
    <div>
      {isOpen && (
        <Elements stripe={stripePromise}>
          <DonationForm onClose={handleClose} />
        </Elements>
      )}
    </div>
  );
};

export default Donation;
