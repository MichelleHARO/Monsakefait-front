// pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Accordion from "../components/Accordion.jsx";
import Carousel from "../components/Carousel.jsx";

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <Accordion/>
            <Carousel />
        </div>
    );
};

export default HomePage;
