import React, {useState} from "react";

const JoinUs = () => {
    const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000); // message disappears after 3 seconds
  };
  return (
    <div className="form-container">
      <h2 className="form-heading">Join With Us</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-wrapper">
            <input
              type="email"
              placeholder="Enter your email"
              className="input"
              required
            />
            <button type="submit" className="btn-inside">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <p className="message">Submission Successful!</p>
      )}
    </div>
  );
};

export default JoinUs;
