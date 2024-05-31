import React, { useState, useEffect } from 'react';
import DrawerContent from '../DrawerMonsak/DrawerContent.jsx';
import Logout from '../LoginPage/Logout.jsx';
import { Link } from 'react-router-dom';
import axiosInstance from '../StandAlone/axiosInstance.jsx';

const Navbar = () => {
    const [userEmail, setUserEmail] = useState('prout@prout.prout');

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axiosInstance.get('http://localhost:3001/api/me/info');
                setUserEmail(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserInfo();
    }, []);

    return (
        <div className="navbar-fixed navbar-container mx-4">
            <div className="navbar bg-base-100 text-primary-content rounded-b-lg h-20 shadow-lg">
                <div className="flex-1">
                    <img src='../src/assets/Logov2.svg' alt="Logo" className="h-16 pl-6" />
                </div>
                <div className="flex-none">
                    <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <ul className="menu p-4 w-3/4 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li className="mb-4">
                            <a className="flex items-center">
                                <img
                                    alt="User avatar"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                    className="w-6 h-6 rounded-full mr-2"
                                />
                                <span>Monsak</span>
                            </a>
                        </li>
                        <li className="mb-4">
                            <a>
                                <span className="text-sm">{userEmail}</span>
                            </a>
                        </li>
                        <li className="mb-4"><Link to='/logout'>Se déconnecter</Link></li>
                        <hr className="my-4 border-1 border-gray-300" />
                        <DrawerContent />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
