// components/SignUp.jsx
// FORMULAIRE D'INSCRIPTION QUI GERE SON ETAT LOCAL ET APPELLE UNE FONCTION 'onSubmit' prop lorsqu'il est soumis.

import React, { useState } from 'react';

const SignUp = ({ onChange, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (onChange) onChange(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
            <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="grow"
                        placeholder="Daisy"
                    />
                </label>
            </div>
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
            <div className="mb-4">
                <label className="input input-bordered flex items-center gap-2">
                    Confirm Password
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
