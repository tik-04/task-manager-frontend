import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

export default function Navbar() {
    const navigate = useNavigate()

    const handleLogout = () => {
      localStorage.removeItem("token"); // ✅ ลบ Token ออกจาก localStorage
      delete axiosInstance.defaults.headers.common["Authorization"]; // ✅ เคลียร์ Header ไม่ให้แนบ Token ไปอีก
    
      navigate("/login"); // ✅ Redirect ไปหน้า Login
    };
  
    return (
      <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
        <h1>My App</h1>
        <button onClick={() => handleLogout()}>Log out</button>
      </nav>
    );
  }
  