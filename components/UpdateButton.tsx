'use client'; // Ensure this is a Client Component

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography, Container } from '@mui/material';
import { updateUser } from '../apis/userApi';
import { RootState } from '../store/store';

const UpdateButton: React.FC = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpdate = async () => {
    if (!user) {
      setError('Unauthorized: Please log in first.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const updatedData = { /* your data here */ };
      await updateUser(updatedData);
      // Dispatch success actions if needed
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message); // Safe to access message property
      } else {
        setError('An unknown error occurred'); // Fallback for unknown error types
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpdate}
        disabled={loading}
      >
        {loading ? 'Updating...' : 'Update Data'}
      </Button>
      {error && <Typography color="error">{error}</Typography>}
    </Container>
  );
};

export default UpdateButton;
