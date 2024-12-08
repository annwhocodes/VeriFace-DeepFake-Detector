import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailOrPhone && password) {
      onLogin(); // Trigger the onLogin prop passed from App.js
      navigate('/upload'); // Redirect to the Upload page after login
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <img src="/logo.png" alt="Logo" className="logo-image" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        <input
          type="text"
          placeholder="Email OR Mobile Phone Number"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="continue-button">Continue</button>
        <button type="button" className="google-login">
          <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google icon" title="Google icons" />
          Continue with Google
        </button>

        <p className="signup-link">
          Don't Have An Account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
