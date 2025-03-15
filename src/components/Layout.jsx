import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout() {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* เมนูด้านข้าง */}
      <div className="flex flex-col flex-1">
        <Navbar /> {/* เมนูด้านบน */}
        <main className="p-4">
          <Outlet /> {/* ตรงนี้จะแสดงเนื้อหาของแต่ละหน้า */}
        </main>
      </div>
    </div>
  );
}
