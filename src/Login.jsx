// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  const handleLogin = () => {
    // Authentication logic
    if (username.trim() === "aniked" && password.trim() === "aniked#123" || username.trim() === "user" && password.trim() === "user123") {
      nav('/task');
      alert(`Welcome, ${username}!`);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleSignUp = () => {
    nav('/sign')
  };

  return (
    <div className='logbody'>
      <div className="login-container">
        {/* <button className="nav-button" onClick={() => nav('/task')}>Go To Task Manager</button> */}
        <h2>Login</h2>
        <div className="input-group">
          <input
            type="text"
            className='user'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
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
          <button className="log" onClick={handleLogin}>Login</button>
          <button className="sign" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
