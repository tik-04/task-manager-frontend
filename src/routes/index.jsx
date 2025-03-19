import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ROUTES from "./router"; 
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Tasks from "../pages/Tasks";
import ProtectedRoute from "../components/ProtectedRoute";
import SignUp from "../pages/SignUp";
import { useEffect, useState } from "react";
import axios from "axios";
import Setting from "../pages/Setting";
import History from "../pages/History";

export default function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3000/auth/me", { withCredentials: true });
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    };

    checkAuth(); // ✅ ต้องเรียกฟังก์ชัน
  }, []);

  if (isAuthenticated === null) {
    return <p>Loading...</p>; // ✅ แสดง Loading ก่อนรู้ผล Auth
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* ถ้ายังไม่ได้ล็อกอิน ให้ Redirect ไปที่ /login */}
        {isAuthenticated ? (
          <Route path="/" element={<Navigate to={ROUTES.HOME} />} />
        ) : (
          <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        )}

        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />

        {/* หน้าที่ต้องล็อกอินถึงเข้าได้ */}
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path={ROUTES.HOME} element={<Dashboard />} />
          <Route path={ROUTES.TASKS} element={<Tasks />} />
          <Route path={ROUTES.SETTING} element={<Setting />} />
          <Route path={ROUTES.HISTORY} element={<History />} />
        </Route>

        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
