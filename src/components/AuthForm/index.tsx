"use client"

import { FormEvent, useState } from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import { useLoginMutation } from '@/store/authApi';
import { useAuth } from '@/contexts/AuthContext';

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const { login } = useAuth();
    const [ toLogin ] = useLoginMutation()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');
        const signin = await toLogin({username, password})
        if(signin.data) {
            const { accessToken, refreshToken } = signin.data;
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            login(accessToken, refreshToken);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-gray-100">
                <Box className="bg-white p-8 rounded-lg shadow-md w-full">
                    <Typography variant="h4" className="mb-6 text-center">
                        {'Sign In'}
                    </Typography>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <TextField
                            fullWidth
                            label="username"
                            variant="outlined"
                            type="username"
                            name='username'
                            required
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            variant="outlined"
                            type="password"
                            name="password"
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
export default AuthForm;
