
import { useAuth } from "../context/AuthContext";
import { Navigate, Route, Routes } from "react-router-dom";

function ProtectedRoute({ path, element }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Routes>
      <Route path={path} element={element} />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoute;
