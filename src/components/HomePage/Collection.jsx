import React, { useEffect, useState } from "react";
import axios from "axios";
import Carroussel from "./Carroussel.jsx";
import '../../index.css';

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
        <div className="main-content">
            <div className="collapse collapse-plus bg-base-100 pt-6 mt-6 shadow-inner">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium font-display text-with-shadow">
                    {collection.name}
                </div>
                <div className="collapse-content">
                    <div className="flex flex-wrap">
                        <Carroussel elements={collection.bags} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
