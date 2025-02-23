import React, { useState, useEffect } from 'react';
import { useApiUrl } from "../../context/ApiUrlContext.jsx";
import { useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import '../../index.css';

const SignUp = ({ onChange, onSubmit, onToggle }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [showConfetti, setShowConfetti] = useState(false);
    const apiUrl = useApiUrl();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (onChange) onChange({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!emailRegex.test(formData.email)) {
            setError('Veuillez entrer une adresse e-mail valide.');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Les mots de passe ne correspondent pas.');
            return;
        }

        if (onSubmit) onSubmit(formData);

        try {
            const response = await fetch(`${apiUrl}/api/user/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    confirmPassword: formData.confirmPassword
                })
            });

            if (response.status === 200) {
                const data = await response.json();
                setShowConfetti(true);
                setTimeout(() => {
                    setShowConfetti(false);
                    navigate('/login');
                }, 5000); // show confetti for 5 seconds
            } else {
                const errorData = await response.json();
                console.error('Sign up failed:', errorData.message);
                setError(errorData.message || 'Échec de l\'inscription');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
            setError('Erreur lors de l\'inscription. Veuillez réessayer plus tard.');
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            {showConfetti && <Confetti />}
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
                                placeholder="Email"
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
