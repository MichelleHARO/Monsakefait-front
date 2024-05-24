import React from "react";


const MonsakAccordion = ({id, openBagAccordion}) => {
    return (<div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" checked={id === openBagAccordion}/>
        <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
        </div>
        <div className="collapse-content">
            <p>Monsak {id}</p>
        </div>
    </div>)

}

export default MonsakAccordion;