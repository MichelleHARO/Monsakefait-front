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
        //console.log('Login Data:', formData);
    };

    const handleSignUpSubmit = (formData) => {
        // Logique d'inscription
        //console.log('Sign Up Data:', formData);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {isLogin ? (
                <Login onSubmit={handleLoginSubmit} onToggle={handleToggle} />
            ) : (
                <SignUp onSubmit={handleSignUpSubmit} onToggle={handleToggle} />
            )}
        </div>
    );
};

export default LoginPage;
