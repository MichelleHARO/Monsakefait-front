// eslint-disable-next-line no-unused-vars
import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';
import axiosInstance from '../StandAlone/axiosInstance';
import '../../index.css';
import { useApiUrl} from "../../context/ApiUrlContext.jsx";

// eslint-disable-next-line react/prop-types
//Component which display bag as cards in carrousel
const BagCard = ({ sac }) => {
    if (!sac) {
        return <div>Sac non trouvé</div>;
    }

    const { id, name, description, items } = sac;

    const apiUrl = useApiUrl();

    // When clicked, fetch through axiosInstance POST method on /me/bag/${id} and add bag with bag.id to Monsak in Drawer and store newToken in localStorage
    const handleAddToMonsak = async () => {
        try {

            const response = await axiosInstance.post(`${apiUrl}/api/me/bag/${id}`);
            console.log("Server response :", response.data);

            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage');
            }
        } catch (error) {
            console.error("Erreur while adding Bag to Monsak !", error);
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
            <div className="card-actions justify-center pb-2 z-10">
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
