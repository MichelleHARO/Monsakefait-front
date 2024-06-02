import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const BagItem = ({ item, handleDelete }) => {
    // eslint-disable-next-line react/prop-types
    const { name, bag_contains_item } = item;
    const [isChecked, setIsChecked] = useState(false); // Initialisez avec false pour ne pas être coché par défaut

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center w-full">
            <input
                type="checkbox"
                className="checkbox mr-2"
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <button
                onClick={handleDelete}
                className="btn btn-sm flex justify-between items-center w-full"
            >
                <span className="mr-1">{name} : x{bag_contains_item.quantity}</span>
                <svg
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
