import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3000/auth/logout", // ✅ ให้ browser ส่ง Cookie ไปด้วย
      {},
      { withCredentials: true}
    );

    navigate("/login"); // ✅ Redirect ไปหน้า Login
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1>My App</h1>
      <button
        onClick={() => handleLogout()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Log out
      </button>
    </nav>
  );
}
