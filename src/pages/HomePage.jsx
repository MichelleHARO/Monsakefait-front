// pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Accordion from "../components/Accordion.jsx";
import BagCard from "../components/BagCard.jsx";


const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Accordion/>
            <BagCard/>
        </div>
    );
};

export default HomePage;
