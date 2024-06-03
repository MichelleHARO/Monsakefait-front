import React from "react";
import axiosInstance from "./axiosInstance";

// eslint-disable-next-line react/prop-types
const BagItem = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, bag_contains_item } = item;

    const handleAddQuantity = async () => {
        //console.log("click", id, bag_contains_item );
        try {
            const response = await axiosInstance.post(`http://localhost:3001/api/me/item/addQuantity/${id}`, { bag_contains_item });
            console.log("Server response :", response.data)
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage')
            }
        } catch (error) {
            console.error("Erreur while updating item quantity !", error)
        }
    };

    const handleDelete = async () => {
        console.log("click", id, bag_contains_item );
        try {
            const response = await axiosInstance.delete(`http://localhost:3001/api/me/item/removeItem/${id}`, 
            // ajout de { params: {} } pour envoyer bag_contains_item dans la requête .delete
            { params: { bag_contains_item }});
            console.log("Server response :", response.data)
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
            <input type="checkbox" defaultChecked className="checkbox mr-2" />
            <button
                //onClick={handleDelete}
                className="btn btn-sm flex justify-between items-center w-full"
            >
                <span 
                    className="mr-1">{name}</span>
                <span 
                    onClick={handleAddQuantity}
                    className="mr-1">quantité : x{bag_contains_item.quantity}</span>
                <svg
                    onClick={handleDelete}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-red-500"
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
    );
};

export default BagItem;
