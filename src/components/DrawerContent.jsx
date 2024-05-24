import React from 'react';
import MonsakButton from './MonsakButtons.jsx';

const DrawerContent = () => {
    const MonsakArray = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ];

    return (
        <div className="flex flex-row space-x-4 p-4">
            {MonsakArray.map((monsak) => (
                <MonsakButton key={monsak.id} id={monsak.id} />
            ))}
        </div>
    );
};

export default DrawerContent;
