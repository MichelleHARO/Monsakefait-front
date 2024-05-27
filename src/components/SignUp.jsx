// components/SignUp.jsx
// FORMULAIRE D'INSCRIPTION QUI GERE SON ETAT LOCAL ET APPELLE UNE FONCTION 'onSubmit' prop lorsqu'il est soumis.

import React, { useState } from 'react';

const SignUp = ({ onChange, onSubmit }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        token: '',
    });
    const [error, setError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

        if (!emailRegex.test(formData.email)) {
            setError('Veuillez entrer une adresse e-mail valide.');
            return;
        }

        if (onSubmit) onSubmit(formData);

        try {
            const response = await fetch('http://localhost:3001/api/user/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword }) //pour n'envoyer que les champs qui nous intéressent au back de formData (pas le token donc) et éviter retour erreur car "all fields required"
            });

            if (response.ok) {
                const data = await response.json();
                //ajout token lorsque l'utilisateur est registered
                const { token } = data;
                setFormData({ ...formData, token });
                localStorage.setItem('token', token);
                console.log('Sign up successful:', data, 'Token :', token);
                // Handle successful sign up (e.g., redirect, show success message, etc.)
            } else {
                console.error('Sign up failed:', response.statusText);
                // Handle sign up failure (e.g., show error message)
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            // Handle error during sign up (e.g., network error)
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
                {error && <p className="text-red-500">{error}</p>}
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
            <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                    Password
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="grow"
                        placeholder="Confirmer le mot de passe"
                    />
                </label>
            </div>
            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
        </form>
    );
};

export default SignUp;
