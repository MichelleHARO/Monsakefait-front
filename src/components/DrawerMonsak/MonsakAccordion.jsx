import React, { useState } from "react";
import BagItem from "../StandAlone/BagItem.jsx";

// eslint-disable-next-line react/prop-types
const MonsakAccordion = ({ monsak, openBagAccordion }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, image, description, items } = monsak;

    // Initialisez à true pour que le bouton soit transparent par défaut
    const [isButtonClicked, setIsButtonClicked] = useState(true);

    const handleButtonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };

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
