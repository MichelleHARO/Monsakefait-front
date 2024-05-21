import React from 'react';
import {PlusIcon} from '@heroicons/react/24/solid'; 

const BagCard = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img src="https://i.ibb.co/0tTSjYB/bagvanilla.png" alt="Shoes"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">bag_name</h2>
                <p>Item</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary flex items-center">
                        <PlusIcon className="h-5 w-5 mr-2"/>
                        Ajouter à Monsak
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BagCard;
