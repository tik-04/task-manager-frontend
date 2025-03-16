import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar (Fixed) */}
      <div className="flex flex-col flex-1 ml-16 md:ml-40"> 
        {/* md:ml-40 = ถอยห่างให้พอดีกับ Sidebar ใหญ่ */}
        <Navbar /> {/* Navbar */}
        <main className="p-4">
          <Outlet /> {/* เนื้อหาของแต่ละหน้า */}
        </main>
      </div>
    </div>
  );
}
