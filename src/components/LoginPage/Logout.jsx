import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Logout component wich remove token from localStorage & redirect to login
const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Supprimez le token de localStorage
        localStorage.removeItem('token');

        navigate('/login');
    }, [navigate]) // Dépendance sur navigate pour éviter les avertissements de lint
    return null;
}

export default Logout;