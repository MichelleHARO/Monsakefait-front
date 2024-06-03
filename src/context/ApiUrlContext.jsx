// src/ApiUrlContext.jsx
import React, { createContext, useContext } from 'react';

const ApiUrlContext = createContext();

export const useApiUrl = () => useContext(ApiUrlContext);

export const ApiUrlProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!apiUrl) {
        throw new Error('The VITE_API_URL environment variable is not set.');
    }

    return (
        <ApiUrlContext.Provider value={apiUrl}>
            {children}
        </ApiUrlContext.Provider>
    );
};
