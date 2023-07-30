import { useContext } from "react";
import { useNavigate, Route } from "react-router-dom";
import { AuthContext } from '../services/AuthContext';

const ProtectedRoute = ({ path, element }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!isLoggedIn) {
        navigate('/login');
        return null;
    }

    return <Route path={path} element={element} />;
}

export default ProtectedRoute;
