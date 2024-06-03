import React from "react";
import BagItem from "../StandAlone/BagItem.jsx";

// eslint-disable-next-line react/prop-types
const MonsakAccordion = ({ monsak, openBagAccordion }) => {
    // eslint-disable-next-line react/prop-types
    const { id, name, image, description, items } = monsak;

    return (
        <div className="collapse collapse-arrow bg-base-200">
            <input
                type="radio"
                name="my-accordion-2"
                checked={id === openBagAccordion}
                readOnly
            />
            <div className="collapse-title text-xl font-medium">
                <p>Monsak {id} : {name}</p>
            </div>
            <div className="collapse-content">
                <p className="font-bold">{description}</p>
                <div className="mt-4">
                {items &&
                    items.map((item, index) => (
                        <BagItem key={index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MonsakAccordion;
