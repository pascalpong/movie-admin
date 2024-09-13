"use client"

import { useState } from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement authentication logic here
    login(); // Call this after successful authentication
  };

  return (
    <Container maxWidth="sm">
      <Box className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
        <Box className="bg-white p-8 rounded-lg shadow-md w-full">
          <Typography variant="h4" className="mb-6 text-center">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Typography>
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
              />
            )}
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              required
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>
          <Typography className="mt-4 text-center">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <Button
              onClick={() => setIsSignUp(!isSignUp)}
              color="primary"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}