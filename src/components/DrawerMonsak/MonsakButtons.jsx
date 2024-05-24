import React from 'react';


const MonsakButton = ({id, setOpenBagAccordion}) => {
    const handleClick = (id) => {
/*        console.log("click", id)*/
        setOpenBagAccordion(id)
    }
    return (

        <div>
            <button onClick={() => handleClick(id)} className="btn btn-outline btn-secondary">
                Monsak : <span className="text-primary">{id}</span>
            </button>
        </div>);
}

export default MonsakButton;
