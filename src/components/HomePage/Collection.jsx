import React, { useEffect, useState } from "react";
import axios from "axios";
import BagCard from "./BagCard.jsx";
import { useApiUrl } from "../../context/ApiUrlContext.jsx";

function Collection({ id }) {
  const [collection, setCollection] = useState(null);
  const [error, setError] = useState(null);
  const apiUrl = useApiUrl(); // Use the hook inside the component

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/collections/${id}`);
        console.log("Data fetched:", response.data);
        setCollection(response.data);
      } catch (error) {
        console.error("Error fetching collection", error);
        if (error.response && error.response.status === 404) {
          setError("Collection not found");
        } else {
          setError("Error fetching collection");
        }
      }
    };

    fetchCollection();
  }, [id, apiUrl]);

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
            {collection.bags.map((sac, index) => (
                <BagCard key={index} sac={sac} />
            ))}
          </div>
        </div>
      </div>
  );
}

export default Collection;
