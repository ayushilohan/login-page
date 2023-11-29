import React, { useState } from 'react';
import './ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    console.log('Resetting password for email:', email);
    setEmail('');
  };


return (
  <div className="reset-password-container">
    <h2>Reset Password</h2>
    <p>Reset your password to access Dashboard</p>
    <form onSubmit={handleReset} className="reset-form">
      <div className="input-field">
        <label htmlFor="email">
          <i className="fas fa-envelope"></i> 
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <button type="submit" className="reset-button">
        Reset
      </button>
    </form>
  </div>
);
};

export default ResetPassword;

