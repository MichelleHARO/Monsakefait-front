// axiosInstance.js
import axios from 'axios';

// Use Vite environment variable
const apiUrl = import.meta.env.VITE_API_URL;
//console.log('API URL:', apiUrl);

const axiosInstance = axios.create({
    baseURL: `${apiUrl}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

//Add request interceptor through Axios to include token in each request to go through private routes
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
