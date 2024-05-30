// pages/LoginPage.jsx
// Composant LoginPage : Gère l'état isLogin pour basculer entre les formulaires de connexion et d'inscription.
// Utilise un bouton pour basculer entre les deux vues et affiche le formulaire approprié.

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Login from '../components/LoginPage/Login.jsx';
import SignUp from '../components/LoginPage/SignUp.jsx';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/signup') {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location.pathname]);

    const handleToggle = () => {
        if (isLogin) {
            navigate('/signup');
        } else {
            navigate('/login');
        }
    };

    const handleLoginSubmit = (formData) => {
        // Logique de connexion
        console.log('Login Data:', formData);
    };

    const handleSignUpSubmit = (formData) => {
        // Logique d'inscription
        console.log('Sign Up Data:', formData);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Log In' : 'Sign Up'}</h2>
            {isLogin ? (
                <Login onSubmit={handleLoginSubmit} />
            ) : (
                <SignUp onSubmit={handleSignUpSubmit} />
            )}
            <button
                onClick={handleToggle}
                className="btn btn-secondary mt-4"
            >
                {isLogin ? 'Go to Sign Up' : 'Go to Log In'}
            </button>
        </div>
    );
};

export default LoginPage;
