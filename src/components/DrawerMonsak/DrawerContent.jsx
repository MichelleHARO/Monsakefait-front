import React, {useState} from 'react';
import MonsakButton from './MonsakButtons.jsx';
import MonsakAccordion from "./MonsakAccordion.jsx";


const DrawerContent = () => {
    const [ openBagAccordion, setOpenBagAccordion] = useState(1)

    console.log("Sac Actif", openBagAccordion)

    const MonsakArray = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-full p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {MonsakArray.map((monsak) => (
                    <MonsakButton key={monsak.id} id={monsak.id} setOpenBagAccordion={setOpenBagAccordion}  />
                ))}

            </div>
            {MonsakArray.map((monsak) => (
                <MonsakAccordion key={monsak.id} id={monsak.id} openBagAccordion={openBagAccordion} />
            ))}
        </div>
    );
};

export default DrawerContent;
