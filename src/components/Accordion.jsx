import React from 'react';
import Collection from "./Collection.jsx";

const Accordion = () => {
    {/* RECUPERER UN ARRAY DE COLLECTION */
    }
    const CollectionArray = [{id: 1, title: "Collection 1", content: "Content 1"}, {
        id: 2,
        title: "Collection 2",
        content: "Content 2"
    }, {id: 3, title: "Collection 3", content: "Content 3"},];

    return (<div>
        {/* FAIRE BOUCLE SUR LES COLLECTIONS */}
        {CollectionArray.map((collection) => {
            return (<Collection key={collection.id} title={collection.title} content={collection.content}/>);
        })}
    </div>);
};

export default Accordion;
