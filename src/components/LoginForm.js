import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    setEmailError('');

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPasswordError('Password must contain at least one lowercase letter');
      return;
    }
    if (!/[0-9]/.test(password)) {
      setPasswordError('Password must contain at least one number');
      return;
    }
    setPasswordError('');

    setIsLoggedIn(true);
  }

  return (
    <div>
      {isLoggedIn ? (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">You are logged in with email: {email}</Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            label="Password"
            type="password"
            value={
password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;
