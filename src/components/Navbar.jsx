import React, {useState} from 'react';

const Navbar = () => {
    const [showMonsak, setShowMonsak] = useState(false);
    const userEmail = "prout@prout.prout"

    const toggleMonsak = () => {
        setShowMonsak(!showMonsak);
    };

    return (
        <div className="navbar bg-primary text-primary-content rounded-lg">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Monsakefait</a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleMonsak}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16m-7 6h7"/>
                        </svg>
                    </div>
                    {showMonsak && (
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="flex items-center">
                                    <img
                                        alt="User avatar"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        className="w-6 h-6 rounded-full mr-2"
                                    />
                                    <span>Monsak</span>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span className="text-sm">{userEmail}</span>
                                </a>
                            </li>
                            <li><a>Se déconnecter</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
