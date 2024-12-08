import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function to reset authentication state
    navigate('/'); // Redirect to the login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">
          VeriFace
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/upload">Upload Video</Link>
        <Link to="/profile">Profile</Link>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

