import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import axiosInstance from '../StandAlone/axiosInstance';

const BagCard = ({ sac }) => {
    if (!sac) {
        return <div>Sac non trouvé</div>;
    }

    const { id, name, description, items } = sac;

    // Fonction pour gérer l'ajout à Monsak
    const handleAddToMonsak = async () => {
        //console.log('bag Id : ', id);
        try {
            const response = await axiosInstance.post(`http://localhost:3001/api/me/bag/${id}`);
            console.log("Server response :", response.data)
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage')
            }
        } catch (error) {
            console.error("Erreur while adding to Monsak !", error)
        }
    };

    return (
        <div className="card card-compact w-96 bg-secondary shadow-xl m-2">
            <figure className="p-12 w-auto">
                <img src="https://i.ibb.co/VqP4txN/bagvanillanoir.png" alt="Shoes" className="w-1/5" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                {items && items.length > 0 ? (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>- {item.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun item disponible</p>
                )}
                <div className="card-actions justify-center">
                    <button
                        className="btn btn-primary flex items-center"
                        onClick={handleAddToMonsak}
                    >
                        <PlusIcon className="h-5 w-5 mr-2" />
                        Ajouter à Monsak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BagCard;