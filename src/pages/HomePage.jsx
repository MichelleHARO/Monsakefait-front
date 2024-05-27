// pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/HomePage/Navbar.jsx';
import Accordion from "../components/HomePage/Accordion.jsx";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Accordion/>
        </div>
    );
};

export default HomePage;
