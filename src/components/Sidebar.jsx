import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../routes/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faBarsProgress, faClockRotateLeft, faFolder, faGears } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import RotatingText from "../../Reactbits/RotatingText/RotatingText"



export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="">

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
              className={`flex items-center justify-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 ${ location.pathname === ROUTES.HOME ? "bg-gray-300" : ""}`}
            >
              <FontAwesomeIcon icon={faFolderOpen} />
          </Link>
          <Link
              to={ROUTES.TASKS}
              className={`flex items-center justify-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 ${ location.pathname === ROUTES.TASKS ? "bg-gray-300" : ""}`}
            >
              <FontAwesomeIcon icon={faBarsProgress} />
          </Link>
          <Link
              to={ROUTES.HISTORY}
              className={`flex items-center justify-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300 ${ location.pathname === ROUTES.HISTORY ? "bg-gray-300" : ""}`}
            >
              <FontAwesomeIcon icon={faClockRotateLeft} />
          </Link>

        </div>
      </div>
      {/* end SidebarMObile */}

      {/* Sidebar ใหญ่ (Desktop) */}
      <div className="hidden md:flex md:w-40 bg-gray-100 text-gray-700 h-screen p-4 fixed top-0 left-0 flex-col items-center justify-between">
        <div>
          <div className="flex justify-center items-center">
            <a className="flex items-center w-[30%]">
              <svg
                className="w-8 h-8 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
            </a>
            <RotatingText
              texts={['Tik', 'Tasks', 'Tow', 'TTT!']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-gray-700 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md w-[70%]"
              staggerFrom={"last"}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-120%", opacity: 0 }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-4 border-t border-gray-300">
              <Link
                to={ROUTES.HOME}
                className={`flex items-center w-full h-12 px-3 mt-3 rounded hover:bg-gray-300 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100   ${ location.pathname === ROUTES.HOME ? "bg-gray-300 shadow-md translate-x-2" : ""}`}
              >
                {location.pathname === ROUTES.HOME ? <FontAwesomeIcon icon={faFolderOpen} className=" animate-bounce"/> : <FontAwesomeIcon icon={faFolder} />}
                <span className="ml-2 text-sm font-medium">Dashboard</span>
              </Link>
              <Link
                to={ROUTES.TASKS}
                className={`flex items-center w-full h-12 px-3 mt-3 rounded hover:bg-gray-300 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ${ location.pathname === ROUTES.TASKS ? "bg-gray-300 shadow-md translate-x-2" : ""}`}
              >
                <FontAwesomeIcon icon={faBarsProgress} className={`${ location.pathname === ROUTES.TASKS ? "animate-bounce" : ""}`}/>
                <span className="ml-2 text-sm font-medium">Tasks</span>
              </Link>
              <Link
                to={ROUTES.HISTORY}
                className={`flex items-center w-full h-12 px-3 mt-3 rounded hover:bg-gray-300 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 ${ location.pathname === ROUTES.HISTORY ? "bg-gray-300 shadow-md translate-x-2" : ""}`}
              >
                <FontAwesomeIcon icon={faClockRotateLeft} className={`${ location.pathname === ROUTES.HISTORY ? "animate-spin" : ""}`} />
                <span className="ml-2 text-sm font-medium">HISTORY</span>
              </Link>
            </div>
          </div>
        </div>
        <footer className="">
            <Link 
              to={ROUTES.SETTING}
              className={`text-lg hover:text-gray-300 ${ location.pathname === ROUTES.SETTING ? "animate-pulse" : ""}`}>
              <FontAwesomeIcon icon={faGears} className="mr-2"/>
              Setting
            </Link>
      </footer>
      </div>
      {/* End sidebarDesktop */}



    </div>
  );
}
