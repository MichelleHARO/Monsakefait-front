// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import MonsakButton from './MonsakButton.jsx';
import MonsakAccordion from "./MonsakAccordion.jsx";

const DrawerContent = () => {
    const MonsakArray = [{
        id: 1,
        desc: "Un prout nucléaire",
        items: [{name: "Une vulve"}, {name: "Un zizi"}, {name: "Une vache"}, {name: "Un sexe"}]
    }, {id: 2, desc: "Une femme avec zizi", items: []}, {id: 3, desc: "Une vulvo vache", items: []}, {
        id: 4,
        desc: "Un sexe velu",
        items: []
    },];

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
