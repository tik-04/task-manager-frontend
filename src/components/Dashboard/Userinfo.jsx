import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { CiCircleChevDown } from "react-icons/ci";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Userinfo = () => {
  const mockData = [
    { name: "Mon", percent: 40 },
    { name: "Tue", percent: 55 },
    { name: "Wed", percent: 60 },
    { name: "Thu", percent: 30 },
    { name: "Fri", percent: 80 },
    { name: "Sat", percent: 90 },
    { name: "Sun", percent: 70 },
  ];

  return (
    <article className="p-4 w-[62%] text-center bg-white h-[90%] rounded-2xl shadow-2xl flex flex-col justify-between items-start">
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2 text-2xl">
            <FcBusinessman className="bg-slate-200 rounded-lg p-1" />
            <h1 className="">User Info "NpTik"</h1>
          </div>
          <button className="text-sm flex justify-center items-center gap-2 p-[6px] border-solid border-[1px] rounded-2xl  border-slate-300">
            Week <CiCircleChevDown />
          </button>
        </div>
        <div className="text-start">
          <span className="text-xs text-slate-400">
            Lorem ipsum dolor sit amet consectetur,
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center w-full p-2  h-[60%]">
        <div className="w-[30%] text-start">
          <h1>+20 %</h1>
          <p className="text-xs text-slate-400">
            This Week your Task is complete more than last Week's
          </p>
        </div>
        <div className="w-[60%] h-[100%]">
          <div className="w-full h-full">
            <h2 className="text-sm font-semibold text-slate-500 mb-2">
              Weekly Task Completion
            </h2>
            <ResponsiveContainer width="100%" height="100%">
              {mockData.length === 0 ? (
                <p className="text-sm text-red-400">No data this week</p>
              ) : (
                <BarChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis hide />
                  <Tooltip />
                  <defs>  {/*  ตรงนี้เรากำหนด ต่าสี gradiant ให้ bar แล้วไปเรียกตรง fill ใน bar element */}
                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Bar dataKey="percent" fill="url(#gradient)" radius={[4, 4, 0, 0]} isAnimationActive={true} />
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Userinfo;
