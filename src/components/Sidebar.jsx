import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../routes/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";

export default function Sidebar() {
  const [user, setUser] = useState(null);

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


  return (
    <div>

      {/* Sidebar เล็ก (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-16 bg-gray-800 text-white flex flex-col items-center p-4 transition-transform transform md:hidden`}
      >
        <a className="flex items-center justify-center mt-3" href="#">
          <svg
            className="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
          </svg>
        </a>
        <div className="flex flex-col items-center mt-3 border-t border-gray-300">
          <Link
              to={ROUTES.HOME}
              className="flex items-center justify-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <FontAwesomeIcon icon={faFolderOpen} />
          </Link>
          <Link
              to={ROUTES.TASKS}
              className="flex items-center justify-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300"
            >
              <FontAwesomeIcon icon={faBarsProgress} />
          </Link>

        </div>
      </div>
      {/* end SidebarMObile */}

      {/* Sidebar ใหญ่ (Desktop) */}
      <div className="hidden md:flex md:w-40 bg-gray-100 text-gray-700 h-screen p-4 fixed top-0 left-0 flex-col items-center justify-between">
        <div>
          <a className="flex items-center w-full px-3 mt-3">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span className="ml-2 text-sm font-bold">TTT</span>
          </a>

          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-300">
              <Link
                to={ROUTES.HOME}
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 focus:bg-gray-300 focus:shadow-md"
              >
                <FontAwesomeIcon icon={faFolderOpen} />
                <span className="ml-2 text-sm font-medium">Dashboard</span>
              </Link>
              <Link
                to={ROUTES.TASKS}
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 focus:bg-gray-300 focus:shadow-md"
              >
                <FontAwesomeIcon icon={faBarsProgress} />
                <span className="ml-2 text-sm font-medium">Tasks</span>
              </Link>
            </div>
          </div>
        </div>

        <footer className="">
          {user ?  (
            <div className="">
              <FontAwesomeIcon icon={faUser} className="mr-2"/>
              {user.username}
            </div>
            ) : "Loading..."}
        </footer>
      </div>
      {/* End sidebarDesktop */}





    </div>
  );
}
