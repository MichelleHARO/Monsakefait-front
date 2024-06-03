import React from 'react';
import Collection from "./Collection.jsx";

const Accordion = () => {
    {/* RECUPERER UN ARRAY DE COLLECTION */
    }
    const CollectionArray = [
        {id: 1,},
        {id: 2,},
        {id: 3,},
        {id: 4,},
        {id: 5,},
        {id: 6,},
    ];

    return (<div>
        {/* FAIRE BOUCLE SUR LES COLLECTIONS */}
        {CollectionArray.map((collection) => {
            return (<Collection key={collection.id} id={collection.id}/>);
        })}
    </div>);
};

export default Accordion;
