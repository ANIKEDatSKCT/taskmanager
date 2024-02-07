// SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Create a new CSS file for SignUp styles
import Login from './Login';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleSignUp = () => {
    // Basic validation checks
    if (!isValidUsername(name)) {
      alert('Please enter a valid username.');
      return;
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!isValidPassword(password)) {
      alert('Please enter a valid password (at least 6 characters).');
      return;
    }
  
    // If all validations pass, proceed with sign-up
    alert(`Welcome, ${name}!`);
    nav('/task');
  };
  
  // Function to check if the username is valid
  const isValidUsername = (username) => {
    // Implement your username validation logic here
    // For example, check if it's not empty, contains only alphanumeric characters, etc.
    return username.trim() !== '';
  };
  
  // Function to check if the email is valid
  const isValidEmail = (email) => {
    // Implement your email validation logic here
    // For example, use a regular expression to check the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Function to check if the password is valid
  const isValidPassword = (password) => {
    // Implement your password validation logic here
    // For example, check if it has at least 6 characters
    return password.length >= 8;
  };
  

  return (
    <div className="signbody">
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="input-group">
        <input
          type="text"
          className='user'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          type="email"
          className='user'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          type="password"
          className='user'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      </div>
      <div className="button-group">
        <button className="sign" onClick={handleSignUp}>Sign Up</button>
      </div>
      <div className="go-back">
  <button className='back' onClick={() => nav('/')}>Go Back</button>
</div>
    </div>
  </div>
  );
};

export default SignUp;
