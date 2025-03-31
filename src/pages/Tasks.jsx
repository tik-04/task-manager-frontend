import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorTask from "../components/tasks/ErrorTask";
import AllTasks from "../components/tasks/AllTasks";
import AddTask from "../components/tasks/AddTask";
import EditTask from "../components/tasks/EditTask";
import { motion } from "framer-motion";
import { FcAddDatabase } from "react-icons/fc";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(0);

  const fetchTasks = async () => {
    console.log("Fetching tasks...");
    try {
      const response = await axios.get("/tasks", {
        withCredentials: true,
      });
      console.log("Tasks:", response.data.data);
      setTasks(response.data.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = { title, description: desc, status, due_date: date };
      console.log(newTask);
      await axios.post(
        "/tasks",
        newTask,
        { withCredentials: true } // ✅ ให้ browser ส่ง Cookie ไปด้วย
      );

      fetchTasks();
      setTitle("");
      setDesc("");
      setStatus("pending");
      setDate("");

      setAddTask(false); // ✅ ปิด modal
    } catch (error) {
      console.error("Error create Task:", error);
      setError(error.response?.data?.message || "Failed to create task");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`/tasks/${taskId}`, {
        withCredentials: true,
      });
      fetchTasks();
    } catch (error) {
      console.error("Error Delete Task:", error);
      setError(error.response?.data?.message || "Failed to delete task");
    }
  };

  const handleEditTask = async (e, taskId) => {
    e.preventDefault();
    console.log(taskId);
    try {
      const editTask = { title, description: desc, due_date: date };
      await axios.patch(`/tasks/${taskId}`, editTask, {
        withCredentials: true,
      });

      fetchTasks();
      setTitle("");
      setDesc("");
      setDate("");

      setEditId(0);
      setEdit(false);
    } catch (error) {
      console.error("Error Delete Task:", error);
      setError(error.response?.data?.message || "Failed to delete task");
    }
  };

  const handleFinishTask = async (taskId,task_status) => {
    try {
      const taskStatus = { status:task_status };
      await axios.patch(`/tasks/${taskId}/finish`, taskStatus , {
        withCredentials: true,
      });
      fetchTasks();
    } catch (error) {
      console.error("Error Finish Task:", error);
      setError(error.response?.data?.message || "Failed to finish task");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="p-4 flex flex-col items-center justify-center">
        {/* <!-- Main modal --> */}
        {addTask ? (
          <AddTask
            title={title}
            setTitle={setTitle}
            desc={desc}
            setDesc={setDesc}
            date={date}
            setDate={setDate}
            setStatus={setStatus}
            setAddTask={setAddTask}
            handleCreateTask={handleCreateTask}
          />
        ) : null}

        {/* <!-- Edit Tasks modal --> */}
        {edit ? (
          <EditTask
            setEdit={setEdit}
            handleEditTask={handleEditTask}
            title={title}
            setTitle={setTitle}
            desc={desc}
            setDesc={setDesc}
            date={date}
            setDate={setDate}
            editId={editId}
          />
        ) : null}

        {error && <ErrorTask error={error} setError={setError} />}

        <h1 className="text-center font-bold text-xl">Tasks</h1>
        <h1 className="text-center text-xl text-red-600 mt-5">You can't finish the task if the status is pending</h1>
        {tasks.length > 0 ? (
          <AllTasks
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            setEdit={setEdit}
            setEditId={setEditId}
            handleFinishTask={handleFinishTask}
          />
        ) : (
          <h1 className="text-center p-10">You have no Task</h1>
        )}

        <button
          className=" flex justify-between items-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded animate-bounce focus:animate-none hover:animate-none text-md  mt-3 tracking-wide "
          onClick={() => setAddTask(true)}
        >
          <FcAddDatabase /><div className="font-bold">Task</div>
        </button>
      </div>
    </motion.div>
  );
};

export default Tasks;
