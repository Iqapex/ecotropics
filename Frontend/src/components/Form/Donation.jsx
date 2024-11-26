import React, { useState } from 'react';
import './Donation.css';

const Donation = ({ onClose }) => {
  const [customAmount, setCustomAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const handleDonate = (method) => {
    setSuccessMessage(`Thank you for your generous donation of ${customAmount || 'a selected amount'}`);
  };

  return (
    <div className="donation-container">
      {!successMessage ? (
        <div className="donation-card">
          <h2>Support Our Mission</h2>
          <p>Support ZAMSOF's mission by donating today, empowering communities for justice, equality, sustainability, and positive change</p>
          <div className="amount-options">
            <button onClick={() => setCustomAmount(20)}>$20</button>
            <button onClick={() => setCustomAmount(50)}>$50</button>
            <button onClick={() => setCustomAmount(100)}>$100</button>
            <button onClick={() => setCustomAmount('')}>Other</button>
          </div>
          {customAmount === '' && (
            <input
              type="number"
              placeholder="Enter Amount (USD)"
              value={customAmount}
              onChange={handleInputChange}
              className="custom-input"
            />
          )}
          <div className='payment'>
          <button className="donate-btn" onClick={() => handleDonate('Credit/Debit Card')}>
            Payment
          </button>
          </div>
        </div>
      ) : (
        <div className="success-message">
          <h2>{successMessage}</h2>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Donation;
