import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import axiosInstance from '../StandAlone/axiosInstance';
import '../../index.css';

const BagCard = ({ sac }) => {
    if (!sac) {
        return <div>Sac non trouvé</div>;
    }

    const { id, name, description, items } = sac;

    // Fonction pour gérer l'ajout à Monsak
    const handleAddToMonsak = async () => {
        try {
            const response = await axiosInstance.post(`http://localhost:3001/api/me/bag/${id}`);
            console.log("Server response :", response.data);
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage');
            }
        } catch (error) {
            console.error("Erreur while adding to Monsak !", error);
        }
    };

    return (
        <div
            className="card card-compact w-full sm:w-80 md:w-96 bg-secondary shadow-xl m-2 card-background h-96 sm:h-104 md:h-112"
        >
            <div className="card-body text-center overflow-y-auto custom-scrollbar">
                <figure className="pt-10 pb-10 w-full flex justify-center">
                    <img src="https://i.ibb.co/VqP4txN/bagvanillanoir.png" alt="Bags" className="w-1/5"/>
                </figure>
                <h2 className="card-title justify-center">{name}</h2>
                <p className="mb-1">{description}</p>
                {items && items.length > 0 ? (
                    <ul className="list-none p-0 text-left">
                        {items.map((item, index) => (
                            <li key={index}>- {item.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun item disponible</p>
                )}
            </div>
            <div className="card-actions justify-center pb-2">
                <button
                    className="btn btn-primary flex items-center shadow-inner"
                    onClick={handleAddToMonsak}
                >
                    <PlusIcon className="h-5 w-5 mr-2"/>
                    Ajouter à Monsak
                </button>
            </div>
        </div>
    );
};

export default BagCard;
