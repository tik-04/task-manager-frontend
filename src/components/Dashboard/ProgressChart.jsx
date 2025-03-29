import { Legend } from '@headlessui/react';
import React from 'react'
import {
    PieChart,
    Pie,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Cell, // <<<<<< สำคัญ
  } from "recharts";
  

const ProgressChart = () => {

  const COLORS = ['#a5b4fc', '#fcd34d', '#fca5a5']// ฟ้า / เหลือง / แดง


  const mockData = [
    { name: 'Completed', value: 10 },
    { name: 'In Progress', value: 5 },
    { name: 'Pending', value: 3 }
  ]

  //   chat gpt 100% for layout a chart
  const renderLabelInside = ({ name, value, cx, cy, midAngle, outerRadius }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={10}
      >
        {`${name}: ${value}`}
      </text>
    );
  };
  

  return (
    <article className='rounded-2xl bg-white w-[48%] shadow-2xl p-3 h-full'>

        <div className="flex justify-between w-full items-center">
            <h1>ProgressChart</h1>
            
        </div>

        <hr className="my-2 border-t border-gray-300 w-full" />

        {/* main content */}

        
        <ResponsiveContainer width="100%" height="80%">
            <PieChart>
                <Pie
                data={mockData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={renderLabelInside}
                labelLine={false}
                isAnimationActive={true}
                >
                {mockData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>



    </article>
  )
}

export default ProgressChart