import React from 'react';
import DrawerContent from '../DrawerMonsak/DrawerContent.jsx';

const Navbar = () => {
    const userEmail = "prout@prout.prout";

    return (
        <div>
            <div className="navbar bg-primary text-primary-content rounded-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Monsakefait</a>
                </div>
                <div className="flex-none">
                    <label htmlFor="my-drawer-4" className="btn btn-ghost btn-circle drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </label>
                </div>
            </div>

            <div className="drawer z-20 drawer-end">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle"/>
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
                        <li className="mb-4"><a>Se déconnecter</a></li>
                        <hr className="my-4 border-1 border-gray-300"/>
                        <DrawerContent/>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
