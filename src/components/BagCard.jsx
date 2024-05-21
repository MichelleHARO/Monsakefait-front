import React, {useEffect, useState} from 'react';
import {PlusIcon} from '@heroicons/react/24/solid';

const BagCard = () => {
    const [items, setItems] = useState([]);

    // Fonction pour récupérer les éléments "items" de l'API
    const fetchItems = async () => {
        try {
            const response = await fetch('http://your-api-url/api/item');
            if (response.ok) {
                const data = await response.json();
                setItems(data);
            } else {
                console.error('Erreur lors de la récupération des éléments:', response.statusText);
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    // Fonction pour gérer l'ajout à Monsak
    const handleAddToMonsak = async () => {
        try {
            const response = await fetch('http://your-api-url/api/me/bag', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({bagName: 'bag_name'}),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Sac ajouté avec succès:', data);
            } else {
                console.error('Erreur lors de l\'ajout du sac:', response.statusText);
            }
        } catch (error) {
            console.error('Erreur réseau:', error);
        }
    };

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className="p-12">
                <img src="https://i.ibb.co/0tTSjYB/bagvanilla.png" alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">bag_name</h2>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
                <div className="card-actions justify-center">
                    <button
                        className="btn btn-primary flex items-center"
                        onClick={handleAddToMonsak}
                    >
                        <PlusIcon className="h-5 w-5 mr-2"/>
                        Ajouter à Monsak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BagCard;
