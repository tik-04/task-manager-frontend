import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("token"); // เช็คว่ามี token ไหม

  return isAuthenticated ? children : <Navigate to="/login" />;
}
