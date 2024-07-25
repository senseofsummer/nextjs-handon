'use client'; // Mark this as a Client Component

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Typography, Container, Box, CircularProgress, Paper } from '@mui/material';
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
    <Container maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Login
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Box sx={{ position: 'relative', marginTop: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogin}
              disabled={loading}
              fullWidth
              sx={{ padding: 1.5 }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
            </Button>
            {error && (
              <Typography color="error" variant="body2" sx={{ marginTop: 2 }}>
                {error}
              </Typography>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
