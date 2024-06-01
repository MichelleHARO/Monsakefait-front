import React, { useState, useEffect } from 'react';
import MonsakButton from './MonsakButton.jsx';
import MonsakAccordion from "./MonsakAccordion.jsx";
import axiosInstance from '../StandAlone/axiosInstance.jsx';
import { useApiUrl } from "../../context/ApiUrlContext.jsx";

const DrawerContent = () => {
    const [openBagAccordion, setOpenBagAccordion] = useState(1);
    const [messak, setMessak] = useState([]);
    const apiUrl = useApiUrl(); // Use the hook inside the component

    const fetchMonsakArray = async () => {
        try {
            const response = await axiosInstance.get(`${apiUrl}/api/me/bag`);
            setMessak(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    useEffect(() => {
        fetchMonsakArray();

        const intervalId = setInterval(fetchMonsakArray, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {messak.map((monsak) => (
                    <MonsakButton
                        key={monsak.id}
                        id={monsak.id}
                        name={monsak.name}
                        setOpenBagAccordion={setOpenBagAccordion}
                    />
                ))}
            </div>
            {messak.map((monsak) => (
                <MonsakAccordion
                    key={monsak.id}
                    monsak={monsak}
                    openBagAccordion={openBagAccordion}
                />
            ))}
        </div>
    );
};

export default DrawerContent;
