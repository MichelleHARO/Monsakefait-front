import React, { useState } from "react";
import axiosInstance from "./axiosInstance";


// eslint-disable-next-line react/prop-types
const BagItem = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, bag_contains_item } = item;
    const [isChecked, setIsChecked] = useState(false); // Initialisez avec false pour ne pas être coché par défaut

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    
    const handleAddQuantity = async () => {
        //console.log("click", id, bag_contains_item );
        try {
            const response = await axiosInstance.post(`http://localhost:3001/api/me/item/addQuantity/${id}`, { bag_contains_item });
            //console.log("Server response :", response.data)
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage')
            }
        } catch (error) {
            console.error("Erreur while updating item quantity !", error)
        }
    };

    const handleRemoveQuantity = async () => {
        //console.log("click", id, bag_contains_item );
        try {
        const response = await axiosInstance.delete(`http://localhost:3001/api/me/item/removeQuantity/${id}`, { params: { bag_contains_item }});
        //console.log("Server response :", response.data)
        const newToken = response.data.newToken;
        if (newToken) {
            localStorage.setItem('token', newToken);
            console.log('Token updated in localStorage')
        }
    } catch (error) {
        console.error("Erreur while updating item quantity !", error)
    }
    };

    const handleDeleteItem = async () => {
        //console.log("click", id, bag_contains_item );
        try {
            const response = await axiosInstance.delete(`http://localhost:3001/api/me/item/removeItem/${id}`, 
            // ajout de { params: {} } pour envoyer bag_contains_item dans la requête .delete
            { params: { bag_contains_item }});
            //console.log("Server response :", response.data)
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage')
            }
        } catch (error) {
            console.error("Erreur while removing Item from Monsak !", error)
        }
    };


    return (
        <div className="flex items-center w-full">
            <input
                type="checkbox"
                className="checkbox mr-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div
                //onClick={handleDelete}
                className="join flex justify-between items-center w-full"
            >
                
                <span 
                    className="font-bold join-item">{name}</span>
                <div>
                    <span 
                        className="font-bold text-center p-2 join-item">
                        Qté: {bag_contains_item.quantity}
                    </span>
                    <button
                        className="btn btn-sm">
                        <svg 
                            onClick={handleRemoveQuantity}
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" fill="currentColor" 
                            className="size-6 text-red-500 join-item"
                        >
                            <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    
                    <button
                        className="btn btn-sm">
                        <svg 
                            onClick={handleAddQuantity} 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor" 
                            className="size-6 text-green-500 join-item">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    

                    <button
                        className="btn btn-sm">
                        <svg
                            onClick={handleDeleteItem}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500 join-item"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default BagItem;
