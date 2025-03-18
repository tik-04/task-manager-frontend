import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3000/auth/logout", // ✅ ให้ browser ส่ง Cookie ไปด้วย
      {},
      { withCredentials: true}
    );

    navigate("/login"); // ✅ Redirect ไปหน้า Login
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user",{ withCredentials: true}); // ✅ ใช้ axiosInstance เพื่อแนบ Token
        setUser(response.data.user); // ✅ เก็บข้อมูล User ลง state
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

    const today = new Intl.DateTimeFormat("en-CA").format(new Date());

    return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1>
        {user ?  (
            <div className="">
              <FontAwesomeIcon icon={faUser} className="mr-2"/>
              {user.username}
            </div>
        ) : "Loading..."}
      </h1>
      <h1>Today: {today}</h1>
      <button
        onClick={() => handleLogout()}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Log out
      </button>
    </nav>
  );
}
