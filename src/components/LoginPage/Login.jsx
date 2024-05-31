// components/Login.jsx
// FORMULAIRE DE CONNEXION QUI GERE SON ETAT LOCAL ET APPELLE UNE FONCTION 'onSubmit' prop lorsqu'il est soumis.

import React, { useState } from 'react';
import { useApiUrl} from "../../context/ApiUrlContext.jsx";
import { useNavigate } from 'react-router-dom';

const Login = ({ onChange, onSubmit }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        token: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (onChange) onChange(formData);
    };
    const apiUrl = useApiUrl();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);

        try {
            const response = await fetch(`${apiUrl}/api/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: formData.email, password: formData.password })
            });

            if (!response.ok) {
                throw new Error('Error logging in');
            }

            const data = await response.json();
            const { token } = data;
            setFormData({ ...formData, token });
            localStorage.setItem('token', token);
            console.log('Login successful. Token :', token);
            // Handle successful login (e.g., redirect, store token, etc.)
            // If login successful, redirect to the home page
            navigate('/homepage')
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error during login (e.g., network error)
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                    Email
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="grow"
                        placeholder="daisy@site.com"
                    />
                </label>
            </div>
            <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                    Password
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="grow"
                        placeholder="Mot de passe"
                    />
                </label>
            </div>
            <button type="submit" className="btn btn-primary w-full">Log In</button>

        </form>
    );
};

export default Login;

