import React, { useState } from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../routes/router";
import { FaTasks } from "react-icons/fa";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const TaskSummary = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="w-[35%] text-center shadow-2xl  bg-white h-[90%] rounded-2xl flex flex-col items-start p-3">
      <div className="flex justify-between w-full items-center">
        <h1>Task Summary</h1>
        <Link
          to={ROUTES.TASKS}
          className="font-extralight underline underline-offset-8 decoration-slate-600 decoration-2"
        >
          All Task
        </Link>
      </div>

      <hr className="my-4 border-t border-gray-300 w-full" />

      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center items-center gap-2">
          <div className="logo bg-orange-600 text-white p-3 rounded-md">
            <FaTasks />
          </div>
          <div className="flex flex-col">
            <span className="">
              จำนวนงานทั้งหมด |{" "}
              <span className=" bg-slate-700 text-white px-2 rounded-3xl font-extralight">
                All
              </span>
            </span>
            <span className="text-start text-slate-400">19 งาน</span>
          </div>
        </div>
        <div className="">
          <button
            className="bg-gray-300 p-3 rounded-full hover:bg-gray-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="flex justify-between items-center w-full mt-4 p-1 transition-all transition-discrete">
          <Link className="p-2 rounded-lg bg-slate-200">pending</Link>
          <Link className="p-2 rounded-lg bg-slate-200">in-progress</Link>
          <Link className="p-2 rounded-lg bg-slate-200">success</Link>
        </div>
      ) : (
        ""
      )}
    </article>
  );
};

export default TaskSummary;
