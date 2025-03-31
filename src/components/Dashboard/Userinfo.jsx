import React, { useState,useEffect } from "react";
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
import { startOfWeek, endOfWeek, format,parseISO } from 'date-fns';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const Userinfo = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const weekOption = ['Week 1','Week 2', 'Week 3']
  const [historyTask, setHistoryTask] = useState([])


  const getDayName = (dateStr) => {
    try {
      const date = parseISO(dateStr);
      return format(date, 'EEE');
    } catch (err) {
      console.error("❌ Invalid dateStr in getDayName:", dateStr);
      return null;
    }
  };
  

  const calcPercentFor = (dayName) => {
    const match = historyTask.find(item => {
      return getDayName(item.day) === dayName;
    });
  
    return match ? match.percent : 0;
  };

  // หยุดที่ frontend 2 ใน chatgpt
  const getWeekRange = (date) => {
    const start = startOfWeek(date, { weekStartsOn: 1 });
    const end = endOfWeek(date, { weekStartsOn: 1 });
    return {
      start: format(start, 'yyyy-MM-dd'),
      end: format(end, 'yyyy-MM-dd'),
    };
  };

  const getWeekData = async () => {
    const { start, end } = getWeekRange(selectedDate);
    try {
      const response = await axios.get(`/tasks/week?start=${start}&end=${end}` , { withCredentials:true})
      console.log(response.data.data)
      setHistoryTask(response.data.data)
      console.log("🌐 Full response:", response);
      console.log("✅ response.data:", response.data);
      console.log("📊 response.data.data:", response.data.data);


    } catch (error) {
      console.error("Fetching History Taks Error:",error)
      setHistoryTask([])
    }
  }

  useEffect(() => {
    getWeekData()
  }, [selectedDate]);
  

  const chartData = [
    { name: "Mon", percent: calcPercentFor('Mon') },
    { name: "Tue", percent: calcPercentFor('Tue') },
    { name: "Wed", percent: calcPercentFor('Wed') },
    { name: "Thu", percent: calcPercentFor('Thu') },
    { name: "Fri", percent: calcPercentFor('Fri') },
    { name: "Sat", percent: calcPercentFor('Sat') },
    { name: "Sun", percent: calcPercentFor('Sun') },
  ];

  return (
    <article className="p-4 w-[62%] text-center bg-white h-[90%] rounded-2xl shadow-2xl flex flex-col justify-between items-start">
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-center items-center gap-2 text-2xl">
            <FcBusinessman className="bg-slate-200 rounded-lg p-1" />
            <h1 className="">User Info "NpTik"</h1>
          </div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="border px-2 py-1 rounded-md"
          />
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
              {chartData.length === 0 ? (
                <p className="text-sm text-red-400">No data this week</p>
              ) : (
                <BarChart data={chartData}>
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
