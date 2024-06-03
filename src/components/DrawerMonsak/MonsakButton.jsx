import React from 'react';
import axiosInstance from '../StandAlone/axiosInstance';
import { useApiUrl} from "../../context/ApiUrlContext.jsx";

const MonsakButton = ({ id, setOpenBagAccordion, theme }) => {

    const handleClick = (id) => {
        setOpenBagAccordion(id);
    };

    const apiUrl = useApiUrl();

    const handleBagDelete = async (id) => {
        console.log("Deleting item with id:", id);

        try {
            const responseDelete = await axiosInstance.delete(`http://localhost:3001/api/me/bag/${id}`);
            //console.log("Server response :", responseDelete.data);

            const newToken = responseDelete.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                console.log('Token updated in localStorage');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error("Invalid token, please log in again.");
                // Logique pour rediriger l'utilisateur vers la page de connexion ou rafraîchir le jeton
            } else {
                console.error("Erreur while deleting from Monsak !", error);
            }
        }
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-active btn-secondary flex items-center justify-center shadow-xl mb-4"
                onClick={() => handleClick(id)}
            >
                <span className="font-display font-light text-center">
                    Monsak <span className={`text-primary font-display text-outline text-shadow-lg ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{id}</span>
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-red-500 ml-2"
                    style={{ stroke: 'black', strokeWidth: '2px' }}
                    onClick={(e) => {
                        e.stopPropagation();
                        handleBagDelete(id);
                    }}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default MonsakButton;
