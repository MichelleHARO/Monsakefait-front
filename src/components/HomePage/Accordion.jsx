import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Collection from "./Collection.jsx";
import { useApiUrl} from "../../context/ApiUrlContext.jsx";

const Accordion = () => {
    const [collections, setCollections] = useState([]);
    const [error, setError] = useState(null);

    const apiUrl = useApiUrl();

    //Fetch all collections through axios GET method without instance and setStatus for collections with response.data
    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const response = await axios.get(`${apiUrl}/api/collection`);
                setCollections(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des collections", error);
                setError("Erreur lors de la récupération des collections");
            }
        };

        fetchCollections();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (collections.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {collections.map((collection) => (
                <Collection key={collection.id} id={collection.id} />
            ))}
        </div>
    );
};

export default Accordion;
