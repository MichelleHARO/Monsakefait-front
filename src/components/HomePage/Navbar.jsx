// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../StandAlone/axiosInstance.jsx';
import DrawerContent from '../DrawerMonsak/DrawerContent.jsx';
import DarkModeHandler from '../StandAlone/darkModeHandler.jsx';
import logoLight from '../../assets/Logov2.svg';
import logoDark from '../../assets/logonavdark.svg';
import { useApiUrl} from "../../context/ApiUrlContext.jsx";

const Navbar = () => {
    const [userEmail, setUserEmail] = useState('prout@prout.prout');
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const apiUrl = useApiUrl();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axiosInstance.get(`${apiUrl}/api/me/info`);
                setUserEmail(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
    };


    return (
        <div className="navbar-fixed navbar-container mx-4">
            <div className="navbar bg-base-100 text-primary-content rounded-b-lg h-20 shadow-lg flex justify-between items-center">
                <div className="flex items-center">
                    <img
                        src={theme === 'light' ? logoLight : logoDark}
                        alt="Logo"
                        className="h-16 pl-6"
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <DarkModeHandler onThemeChange={handleThemeChange} />
                    <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </label>
                </div>
            </div>

            <div className="drawer z-20 drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-3/4 min-h-full bg-base-200 rounded-lg shadow-inner">
                        <li className="mb-4 flex items-center">
                            <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle drawer-button ml-auto mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                            </label>
                        </li>
                        <li className="mb-4">
                            <button className="btn no-animation font-bold text-2xl font-display justify-center">{userEmail}</button>
                        </li>
                        <li className="mb-4">
                            <Link to='/logout' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg font-display font-light btn-primary shadow-l">
                                Se déconnecter
                            </Link>
                        </li>
                        <hr className="my-4 border-1 border-black" />

                        <DrawerContent />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
