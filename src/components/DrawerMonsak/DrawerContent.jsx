// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import MonsakButton from './MonsakButton.jsx';
import MonsakAccordion from "./MonsakAccordion.jsx";
import axiosInstance from '../StandAlone/axiosInstance.jsx';

const DrawerContent = () => {
    const MonsakArray = [{
        id: 1,
        desc: "Un sac ultra bg",
        items: [{name: "Un pot de whey"}, {name: "Une paire de claquette"}, {name: "Une vache"}, {name: "Un set de boule de pétanque"}]},
        {id: 2,
        desc: "Un sac trop bien",
        items: []},
        {id: 3, desc: "Une pensée pour tout les freres au hebs", items: []},
        {id: 4,
        desc: "Un sac bien mais moins bien que l'autre",
        items: [{name: "Une seat ibiza faiblement kilometré"}, {name: "un militant de la france insoumise"}, {name: "Cyril hannouna"}, {name: "un feur"}]},
        {id: 5,
            desc: "Un saco pointu turlututu",
            items: [{name: " un fouet"}, {name: "un cable HDMI"}, {name: "un push mid déclic en A"}, {name: "un retracement de fibonacci"}]},
    ];

    const [openBagAccordion, setOpenBagAccordion] = useState(1);
    const [messak, setMessak] = useState(MonsakArray);

    function handleBagDelete(id) {
        console.log("Deleting item with id:", id);
        const newMessak = messak.filter((monsak) => monsak.id !== id);
        console.log("New Messak Array after deletion:", newMessak);
        setMessak(newMessak);
    }

    console.log("Current Messak Array:", messak);
    console.log("Open Bag Accordion ID:", openBagAccordion);

    return (<div className="flex flex-col items-center justify-center min-h-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {messak.map((monsak) => (<MonsakButton
                        key={monsak.id}
                        id={monsak.id}
                        setOpenBagAccordion={setOpenBagAccordion}
                        handleDelete={handleBagDelete}
                    />))}
            </div>
            {messak.map((monsak) => (<MonsakAccordion
                    key={monsak.id}
                    monsak={monsak}
                    openBagAccordion={openBagAccordion}
                />))}
        </div>);
};

export default DrawerContent;
