
/* import React from 'react';
import {PlusIcon} from '@heroicons/react/24/solid';

const BagCard = ({ sac }) => {
    // eslint-disable-next-line react/prop-types

    const { name, colors, items } = sac
    
    // Fonction pour gérer l'ajout à Monsak
    const handleAddToMonsak = async () => {
        console.log("click")
    }
    return (<div className="card card-compact w-96 bg-base-100 shadow-xl m-2">

        <figure className="p-12 w-auto">
            <img src="https://i.ibb.co/0tTSjYB/bagvanilla.png" alt="Shoes" className={"w-1/5"} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <ul>
                {items.map((item, index) => (<li key={index}>{item.name}</li>))}
            </ul>
            <div className="card-actions justify-center">
                <button
                    className="btn btn-primary flex items-center"
                    onClick={handleAddToMonsak}>
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Ajouter à Monsak
                </button>

            </div>

        </div>
    </div>);
};

export default BagCard;
 */

import React from 'react';
import { PlusIcon } from '@heroicons/react/24/solid';

const BagCard = ({ sac }) => {
    if (!sac) {
        return <div>Sac non trouvé</div>;
    }

    const { name, description, items } = sac;

    // Fonction pour gérer l'ajout à Monsak
    const handleAddToMonsak = async () => {
        console.log("click");
    };

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl m-2">
            <figure className="p-12 w-auto">
                <img src="https://i.ibb.co/VqP4txN/bagvanillanoir.png" alt="Shoes" className="w-1/5" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                {items && items.length > 0 ? (
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item.name}</li>
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





