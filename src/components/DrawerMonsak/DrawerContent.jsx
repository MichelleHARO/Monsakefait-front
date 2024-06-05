// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import MonsakButton from './MonsakButton.jsx';
import MonsakAccordion from "./MonsakAccordion.jsx";
import axiosInstance from '../StandAlone/axiosInstance.jsx';
import { useApiUrl } from "../../context/ApiUrlContext.jsx";

//Component which manage Content in navbar, if bags added by user, they are displayed here
const DrawerContent = () => {
    const [openBagAccordion, setOpenBagAccordion] = useState(1);
    const [messak, setMessak] = useState([]);
    const apiUrl = useApiUrl(); // Use the hook inside the component

    //fetch through axiosInstance get and setState for messak
    const fetchMonsakArray = async () => {
        try {
            const response = await axiosInstance.get(`${apiUrl}/api/me/bag`);
            setMessak(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    //Refresh fetchMonsakArray every 1000ms
    useEffect(() => {
        fetchMonsakArray();

        const intervalId = setInterval(fetchMonsakArray, 1000);

        return () => clearInterval(intervalId);
    }, []);

    //console.log("Current Messak Array:", messak);
    //console.log("Open Bag Accordion ID:", openBagAccordion);

    return (<div className="flex flex-col items-center justify-center min-h-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {messak.map((monsak) => (<MonsakButton

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
