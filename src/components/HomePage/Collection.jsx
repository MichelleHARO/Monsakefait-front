
/* import React from "react";

import BagCard from "./BagCard.jsx";
import Carroussel from "./Carroussel.jsx";

const sacs = [{ id: 1, name: 'Mon sac', color: 'grey', items: [{ id: 1, name: "zizi" }, { id: 2, name: "caca" }] }, {
    id: 2,
    name: 'Mon sac 2',
    items: [{id: 1, name: "test1"}, {id: 2, name: "test2"}]
}, {id: 2, name: 'Mon sac 3', color: 'jaune', items: [{id: 1, name: "test5"}, {id: 2, name: "test6"}]}];

function Collection({ id }) {
    //recuperer les sac avec l'id de la collection
    //const sacs = api.getSac();
    const sacMap = sacs.map((sac, index) => (<BagCard key={index} sac={sac}/>));
    return (<div className="collapse collapse-plus bg-base-200">

        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
            Nom de la collection : {id}
        </div>
        <div className="collapse-content">
            <div className={"flex flex-wrap"}>
                <Carroussel elements={sacMap} ></Carroussel>*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import BagCard from "./BagCard.jsx";
import Carroussel from "./Carroussel.jsx";

function Collection({ id }) {
  const [collection, setCollection] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/collection/${id}`);
        console.log("Data fetched:", response.data);
        setCollection(response.data);
      } catch (error) {
        console.error("Error fetching collection", error);
        setError("Error fetching collection");
      }
    };

    fetchCollection();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="collapse collapse-plus bg-base-200">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-xl font-medium">
        {collection.name}
      </div>
      <div className="collapse-content">
        <div className="flex flex-wrap">
          <Carroussel  elements={collection.bags.map((sac, index) => (
            <BagCard key={index} sac={sac} />
          ))}></Carroussel>
        </div>
      </div>
    </div>
  );
}

export default Collection;
