import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            console.log('Email:', email, 'Password:', password);

            // Redirect to the login page after successful account creation
            navigate('/');
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="signup-container">
            <div className="logo">
                <img src="/logo.png" alt="Logo" className="logo-image" />
            </div>
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create an account</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <button type="submit" className="create-account">Create account</button>

                <button type="button" className="google-login">
                    <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google icon" title="Google icon" />
                    Continue with Google
                </button>
                
                <p className="login-link">
                    Already have an account?{' '}
                    <span onClick={() => navigate('/')} style={{ color: 'blue', cursor: 'pointer' }}>
                        Log In
                    </span>
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;
