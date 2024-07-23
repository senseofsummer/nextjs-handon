'use client'; // Mark this as a Client Component


import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import UpdateButton from '../components/UpdateButton';

const HomePage: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <div>
      {user ? (
        <>
          <h1>Welcome, {user.email}</h1>
          <UpdateButton />
        </>
      ) : (
        <p>Please log in to update data.</p>
      )}
    </div>
  );
};

export default HomePage;
