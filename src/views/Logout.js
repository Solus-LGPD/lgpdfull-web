import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAPI from "../services/api";

export default () => {
    const api = useAPI();
    const navigate = useNavigate();

    useEffect(() => {
        const doLogout = () => {
            api.logout();
            navigate('/login');
        }
        doLogout();
    }, []);

    return null;
}
