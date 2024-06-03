import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import { useApiUrl} from "../../context/ApiUrlContext.jsx";

const Login = ({ onChange, onSubmit, onToggle }) => {
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
            navigate('/homepage');
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold font-display">Ah vous revoila !</h1>
                    <p className="py-6 font-bold">
                        Des milliers de saks vous attendaient ! On part où ?<br/><br/> À la plage, randonnée sauvage en
                        forêt ou soirée pyjama chez Sandrine ?
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
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Mot de passe</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="mot de passe"
                                className="input input-bordered"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary font-display font-light">Connexion</button>
                        </div>
                        <div className="form-control mt-4">
                            <button type="button" onClick={onToggle} className="btn btn-secondary font-display font-light">
                                Inscrivez-vous
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
