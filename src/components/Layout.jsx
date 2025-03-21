import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

export default function Layout() {
  return (
    <motion.div className="">
      <div className="flex  bg-slate-200 ">
        <Sidebar /> {/* Sidebar (Fixed) */}
        <div className="flex flex-col flex-1 ml-16 md:ml-40">
          {/* md:ml-40 = ถอยห่างให้พอดีกับ Sidebar ใหญ่ */}
          <Navbar /> 
          <motion.div className="p-2 sm:p-4 m-2 sm:m-4 rounded-md shadow-xl bg-white overflow-auto h-screen">
            <Outlet /> {/* เนื้อหาของแต่ละหน้า */}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
