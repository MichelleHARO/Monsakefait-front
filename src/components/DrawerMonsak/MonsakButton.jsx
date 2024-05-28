// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const MonsakButton = ({id, setOpenBagAccordion, handleDelete}) => {
    const handleClick = (id) => {
        setOpenBagAccordion(id);
    };

    return (<div>
            <button
                onClick={() => handleClick(id)}
                className="btn btn-outline btn-primary flex items-center justify-between"
                style={{borderColor: 'white', color: 'white'}}
            >
                <span>
                    Monsak : <span className="text-primary" style={{color: 'white'}}>{id}</span>
                </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-red-500 ml-2"
                    onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(id);
                    }}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>);
}

export default MonsakButton;
