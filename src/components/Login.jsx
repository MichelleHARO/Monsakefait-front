// components/Login.jsx
// FORMULAIRE DE CONNEXION QUI GERE SON ETAT LOCAL ET APPELLE UNE FONCTION 'onSubmit' prop lorsqu'il est soumis.

import React, { useState } from 'react';

const Login = ({ onChange, onSubmit }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (onChange) onChange(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);

        try {
            const response = await fetch('http://localhost:3001/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                // Handle successful login (e.g., redirect, store token, etc.)
            } else {
                console.error('Login failed:', response.statusText);
                // Handle login failure (e.g., show error message)
            }
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
