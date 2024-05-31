import React, { useEffect, useState } from "react";
import axios from "axios";
import BagCard from "./BagCard.jsx";
import Carroussel from "./Carroussel.jsx";
//import Slider from "./Slider.jsx";

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

  console.log('Collection du slider', collection.name, collection.bags);
  return (
    <div className="collapse collapse-plus bg-base-200">
      <input type="radio" name="my-accordion-3" defaultChecked />
      <div className="collapse-title text-xl font-medium">
        {collection.name}
      </div>
      <div className="collapse-content">
        <div className="flex flex-wrap">
          <Carroussel elements={collection.bags.map((sac, index) => (
            <BagCard key={index} sac={sac} />
          ))}>
          </Carroussel>
        </div>
      </div>
    </div>
  );
}

export default Collection;
