import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApiUrlProvider } from './context/ApiUrlContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ApiUrlProvider>
            <App />
        </ApiUrlProvider>
    </React.StrictMode>,
);
