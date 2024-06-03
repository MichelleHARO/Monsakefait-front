import React, { useState, useEffect } from "react";
import BagItem from "../StandAlone/BagItem.jsx";
import axiosInstance from "../StandAlone/axiosInstance.jsx";

// eslint-disable-next-line react/prop-types
const MonsakAccordion = ({ monsak, openBagAccordion }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, image, description, items } = monsak;

    // Initialiser à true pour que le bouton soit transparent par défaut
    const [isButtonClicked, setIsButtonClicked] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [allItems, setAllItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axiosInstance.get('http://localhost:3001/api/me/item')
                setAllItems(response.data)
            }catch(error){
                console.error("Error fetching collection", error)
            }
        };
        fetchItems();
    }, [])

    const handleChangeSelect = (event) => {
        setSelectedItem(event.target.value);
    };

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };

    //handle 
    const handleAddClick = async () => {
        //console.log(selectedItem, id)
        try {
            const response = await axiosInstance.post(`http://localhost:3001/api/me/item/addItem/${id}`, 
            { selectedItem });
            //console.log("Server response :", response.data)
            const newToken = response.data.newToken;
            if (newToken) {
                localStorage.setItem('token', newToken);
                //console.log('Token updated in localStorage')
            }
        } catch (error) {
            console.error("Error while adding Item from Monsak !", error)
        }
    }

    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input
                type="radio"
                name="my-accordion-2"
                checked={id === openBagAccordion}
                readOnly
            />
            <div className="collapse-title text-xl font-medium">
                <p className="font-display">Monsak {id} : {name}</p>
            </div>
            <div className="collapse-content">
                <p className="font-bold">{description}</p>
                    <div className="mt-4">
                        {items &&
                            items.map((item, index) => (
                                <BagItem key={index} item={item} />
                            ))}
                    </div>
                <div className="flex justify-center mb-3 join join-vertical lg:join-horizontal">
                    <select 
                        value={selectedItem} 
                        onChange={handleChangeSelect}
                        className="select select-bordered w-full max-w-xs join-item">
                        <option disabled selected>Ajouter un objet à Monsak {id}</option>
                        {allItems && allItems.map((item) => (
                            <option key={item.id} value={item.id}>{item.name}</option>
                        ))}                        
                    </select>
                    <button
                        onClick={handleAddClick}
                        className="btn font-display mt-4 bg-transparent border-gray-100 shadow-xl max-w-xs join-item">
                        Ajouter objet !
                    </button>
                </div>
                <div className="flex justify-center mb-3">
                    <button
                        onClick={handleButtonClick}
                        className={`btn font-display mt-4 ${
                            isButtonClicked
                                ? 'bg-transparent border-gray-100 shadow-xl'
                                : 'bg-green-500 border-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 mb-3'
                        }`}
                    >
                        Monsakefait !
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MonsakAccordion;
