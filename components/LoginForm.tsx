'use client'; // Mark this as a Client Component

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Typography, Container } from '@mui/material';
import { login } from '../apis/userApi';
import { loginStart, loginSuccess, loginFailure } from '../store/reducers';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    dispatch(loginStart());

    try {
      const user = await login({ email, password });
      dispatch(loginSuccess(user));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        dispatch(loginFailure(err.message));
      } else {
        setError('An unknown error occurred');
        dispatch(loginFailure('An unknown error occurred'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
};

export default LoginForm;
