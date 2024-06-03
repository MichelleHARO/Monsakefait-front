import React, { useState } from 'react';
import { useApiUrl } from "../../context/ApiUrlContext.jsx";
import { useNavigate } from 'react-router-dom';
import '../../index.css';

const SignUp = ({ onChange, onSubmit, onToggle }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const apiUrl = useApiUrl();

    // Log the apiUrl value
    //console.log(apiUrl);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const navigate = useNavigate();

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
                body: JSON.stringify({ email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword })
            });

            if (response.status === 200) {
                const data = await response.data;
                //console.log('Sign up successful:', data);
                navigate('/login');
            } else {
                console.error('Sign up failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error during sign up:', error);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold font-display">Bienvenue !</h1>
                    <p className="py-6 font-bold">
                        Monsakefait est une plateforme de partage de sacs et un outil d'accompagnement
                        pour la gestion et la préparation de sacs à dos.<br/><br/> Valises, sacs à main, sacs d'activité
                        sportive ou un sac pour un événement particulier, le tout sous forme de
                        checklists.<br/> <br /> Rejoignez-nous !
                    </p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Mot de passe</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Mot de passe"
                                className="input input-bordered"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirmer le mot de passe</span>
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirmer le mot de passe"
                                className="input input-bordered"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary font-display font-light">M'inscrire</button>
                        </div>
                        <div className="form-control mt-4">
                            <button type="button" onClick={onToggle} className="btn btn-secondary font-display font-light">
                                Deja membre ? Connectez-vous
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
