import React, { useState } from "react";
import axiosInstance from "./axiosInstance";
import { useApiUrl } from "../../context/ApiUrlContext.jsx";

// eslint-disable-next-line react/prop-types
// Component which manage items in Drawer
const BagItem = ({ item }) => {
    const { id, name, bag_contains_item } = item;
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const apiUrl = useApiUrl();

    //onClick add item quantity through axiosInstance POST method /me/item/addQuantity/${id}
    const handleAddQuantity = async () => {
        try {
            const response = await axiosInstance.post(`${apiUrl}/api/me/item/addQuantity/${id}`, { bag_contains_item });
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage');
            }
        } catch (error) {
            console.error("Erreur while updating item quantity!", error);
        }
    };

    //onClick remove item quantity through axiosInstance DELETE method /me/item/removeQuantity/${id}
    const handleRemoveQuantity = async () => {
        try {
            const response = await axiosInstance.delete(`${apiUrl}/api/me/item/removeQuantity/${id}`, { params: { bag_contains_item } });
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage');
            }
        } catch (error) {
            console.error("Erreur while updating item quantity!", error);
        }
    };

    //onClick remove all item through axiosInstance DELETE method /me/item/removeItem/${id}
    const handleDeleteItem = async () => {
        try {
            const response = await axiosInstance.delete(`${apiUrl}/api/me/item/removeItem/${id}`, { params: { bag_contains_item } });
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage');
            }
        } catch (error) {
            console.error("Erreur while removing Item from Monsak!", error);
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full p-2">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    className="checkbox mr-2"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <span className="font-bold">{name}</span>
            </div>
            <div className="flex items-center space-x-2 mt-2 md:mt-0">
                <span className="font-bold text-center">Qté: {bag_contains_item.quantity}</span>
                <button className="btn btn-sm" onClick={handleRemoveQuantity}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-red-500">
                        <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className="btn btn-sm" onClick={handleAddQuantity}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-green-500">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>
                <button className="btn btn-sm" onClick={handleDeleteItem}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BagItem;
