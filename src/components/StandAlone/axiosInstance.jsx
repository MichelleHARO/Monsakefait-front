//Instance axios pour passage sur les routes API qui nécessitent le token 
import axios from 'axios';
import { useApiUrl} from "../../context/ApiUrlContext.jsx";

const apiUrl = useApiUrl();

const axiosInstance = axios.create({
    baseURL: `${apiUrl}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Ajouter un intercepteur de requête pour inclure le token dans chaque requête
axiosInstance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            //console.log('Token:', token);
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
