"use client"

import AuthForm from '@/components/AuthForm';
import { useAuth } from '@/contexts/AuthContext';
import { Typography } from '@mui/material';

export default function AdminPage() {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <AuthForm />;
  }

  return (
    <Typography variant="h4">
      Welcome to the Admin Dashboard
    </Typography>
  );
}
