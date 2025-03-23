import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import ROUTES from "../routes/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await axios.post(
      "http://localhost:3000/auth/logout", // ✅ ให้ browser ส่ง Cookie ไปด้วย
      {},
      { withCredentials: true }
    );

    navigate("/login"); // ✅ Redirect ไปหน้า Login
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/user", {
          withCredentials: true,
        }); // ✅ ใช้ axiosInstance เพื่อแนบ Token
        setUser(response.data.user); // ✅ เก็บข้อมูล User ลง state
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  const today = new Intl.DateTimeFormat("en-CA").format(new Date());

  return (
    // <nav className="bg-gradient-to-r from-blue-600 to-blue-500 shadow-md border-b border-blue-700 p-4 text-white">
    //   <div className="max-w-7xl mx-auto flex justify-between items-center">
    //     <h1 className="text-sm md:text-base font-medium tracking-wide">
    //       Today: {today}
    //     </h1>

    //     {user ? (
    //       <div className="relative">
    //         <button
    //           onClick={toggleDropdown}
    //           className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
    //         >
    //           <FontAwesomeIcon icon={faUser} />
    //           <span className="font-semibold text-white">{user.username}</span>
    //         </button>

    //         {isOpen && (
    //           <div className="absolute right-0 mt-2 w-32 shadow-lg z-50">
    //             <button
    //               onClick={handleLogout}
    //               className="block w-full text-left px-4 py-2 bg-white text-black rounded-lg transition-colors hover:bg-gray-100"
    //             >
    //               Logout
    //             </button>
    //         </div>            
    //         )}
    //       </div>
    //     ) : (
    //       "Loading..."
    //     )}
    //   </div>
    // </nav>
    <Disclosure as="nav" className="bg-gray-800">
      <div className="  px-2 sm:px-6 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden text-white">
            {/* Mobile menu button*/}
              Day at mobile
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 text-white">
                  <h1>Today : {today}</h1>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={ROUTES.SETTING}
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <a
                  onClick={handleLogout}
                    className=" cursor-pointer block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

    </Disclosure>
  );
}
