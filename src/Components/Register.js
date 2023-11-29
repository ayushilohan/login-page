import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('Enter email');
  const [password, setPassword] = useState('Enter password');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('Enter username');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Username:', username);
  };

  return (
    <div className="register-container">
      <h2>Register Account</h2>
      <p>Register your account and get started</p>
      <form onSubmit={handleRegister} className="register-form">
        <div className="input-field">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div className="terms">
          <p>By registering, you agree to the terms of use.</p>
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <div className="login-link">
        <p>Already have an account? <a href="#">Login</a></p>
      </div>
    </div>
  );
};

export default Register;
