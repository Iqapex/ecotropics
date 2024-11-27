import React, { useState } from "react";

const JoinUs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const email = e.target.email.value;

    try {
      const response = await fetch("http://localhost:5000/api/joinus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-heading">Join With Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input"
              required
            />
            <button type="submit" className="btn-inside" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      ) : (
        <p className="message">Submission Successful!</p>
      )}
    </div>
  );
};

export default JoinUs;
