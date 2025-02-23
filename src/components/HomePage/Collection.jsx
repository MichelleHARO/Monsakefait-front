// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carroussel from "./Carroussel.jsx";
import '../../index.css';
import {useApiUrl} from "../../context/ApiUrlContext.jsx";

// eslint-disable-next-line react/prop-types
//Display bags in a collection
function Collection({ id }) {
    const [collection, setCollection] = useState(null);
    const [error, setError] = useState(null);

    const apiUrl = useApiUrl();

    //fetch through axios without instance GET method one collection with id /collection/${id} and setStatus for collection with response.data
    useEffect(() => {
        const fetchCollection = async () => {
            try {

                const response = await axios.get(`${apiUrl}/api/collection/${id}`);
                //console.log("Data fetched:", response.data);

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
                <div className="collapse-title text-xl font-medium font-display text-with-shadow text-center">
                    {collection.name}
                </div>
                <div className="collapse-content">
                    <div className="flex justify-center">
                        <Carroussel elements={collection.bags} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Collection;
