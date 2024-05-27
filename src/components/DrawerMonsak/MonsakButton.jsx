// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const MonsakButton = ({id, setOpenBagAccordion, handleDelete}) => {
    const handleClick = (id) => {
/*        console.log("click", id)*/
        setOpenBagAccordion(id)
    }
    return (

        <div>
            <button onClick={() => handleClick(id)} className="btn btn-outline btn-secondary">
                Monsak : <span className="text-primary">{id}</span>
            </button>
            <button onClick={() => handleDelete(id)}>
                Delete
            </button>

        </div>);
}

export default MonsakButton;
