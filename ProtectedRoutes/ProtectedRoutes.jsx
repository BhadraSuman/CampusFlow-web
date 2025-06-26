// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        console.warn("Not Authenticated")
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
