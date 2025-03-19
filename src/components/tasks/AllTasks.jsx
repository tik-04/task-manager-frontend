import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const AllTasks = ( { tasks, handleDeleteTask }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-10 gap-4">
      {tasks.map((task, index) => {
        const formattedDate = new Intl.DateTimeFormat("en-CA").format(
          new Date(task.due_date)
        );
        return (
          <ul className="border border-2-black p-4" key={task?.id ?? index}>
            <li className="text-center mb-2 font-bold">{task.title}</li>
            <li>{task.description}</li>
            <li>status:{task.status}</li>
            <li>finishDay:{formattedDate}</li>
            <div className="flex justify-center items-center mt-2 gap-4">
              <button
                className="border-[1px] border-red-400 text-red-600 hover:border-red-200 hover:text-red-400 p-1.5 rounded-md"
                onClick={() => handleDeleteTask(task.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button className="border-[1px] border-blue-400 text-blue-600 hover:border-blue-200 hover:text-blue-400 p-1.5 rounded-md">
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
            </div>
          </ul>
        );
      })}
    </div>
  );
};

export default AllTasks;
