import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UploadVideo from './components/UploadVideo';
import ProfilePage from './components/ProfilePage';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Set up authentication state

  const handleLogin = () => {
    setIsAuthenticated(true); // Set the user as logged in
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Log the user out
  };

  return (
    <Router>
      {/* Conditionally render Navbar if authenticated */}
      {isAuthenticated && <Navbar onLogout={handleLogout} />} 

      <div className="app-container">
        <Routes>
          {/* Route for login page */}
          <Route path="/" element={<Login onLogin={handleLogin} />} /> 

          {/* Sign-up page */}
          <Route path="/signup" element={<SignUp onLogin={handleLogin} />} />

          {/* Protected Routes (only accessible if authenticated) */}
          {isAuthenticated && (
            <>
              <Route path="/upload" element={<UploadVideo />} />
              <Route path="/profile" element={<ProfilePage />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
