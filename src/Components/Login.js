// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import CSS file

const Login = () => {
  const [username, setUsername] = useState('geekonomy@design.in');
  const [password, setPassword] = useState('*****');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
    setUsername('');
    setPassword('');
    setRememberMe(false);
  };

  return (
    <div className="login-container">
      <h2>Welcome Back !</h2>
      <h4>Sign in to continue H-Care</h4>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="input-field">
          <label htmlFor="username">
            <i className="fas fa-user"></i> {/* Font Awesome icon */}
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">
            <i className="fas fa-lock"></i> {/* Font Awesome icon */}
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="forgot-password">
          <i className="fas fa-question-circle"></i> {/* Icon */}
          <a href="#">Forgot Your Password?</a>
        </div>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;