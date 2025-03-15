import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import ROUTES from "./router"; // <<< Import Routes
import Layout from "../components/Layout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Tasks from "../pages/Tasks";
import ProtectedRoute from "../components/ProtectedRoute";
import SignUp from "../pages/SignUp";



export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ถ้ายังไม่ได้ล็อกอิน ให้ Redirect ไปที่ /login */}
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} />} />
        
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        
        {/* หน้าที่ต้องล็อกอินถึงเข้าได้ */}
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route path={ROUTES.HOME} element={<Dashboard />} />
          <Route path={ROUTES.TASKS} element={<Tasks />} />
        </Route>

        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
