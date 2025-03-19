import React, { useState, useEffect } from "react";
import axios from "axios";
import ErrorTask from "../components/tasks/ErrorTask";
import AllTasks from "../components/tasks/AllTasks";
import AddTask from "../components/tasks/AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("pending");
  const [error, setError] = useState(false);

  const fetchTasks = async () => {
    console.log("Fetching tasks...");
    try {
      const response = await axios.get("http://localhost:3000/tasks", {
        withCredentials: true,
      }); 
      console.log("Tasks:", response.data.data);
      setTasks(response.data.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([])
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = { title, description: desc, status, due_date: date };
      console.log(newTask)
      await axios.post(
        "http://localhost:3000/tasks",
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
      await axios.delete(`http://localhost:3000/tasks/${taskId}`, {
        withCredentials: true,
      });
      fetchTasks();
    } catch (error) {
      console.error("Error Delete Task:", error);
      setError(error.response?.data?.message || "Failed to delete task");
    }
  };

  return (
    
    
    <div className="p-4 flex flex-col items-center justify-center">
            {/* <!-- Main modal --> */}
            {addTask ? (
              <AddTask title={title} setTitle={setTitle}
                       desc={desc} setDesc={setDesc}
                       date={date} setDate={setDate}
                       setStatus={setStatus} setAddTask={setAddTask} handleCreateTask={handleCreateTask} />
              ) : null}

      {error && <ErrorTask error={error} setError={setError} />}

      <h1 className="text-center font-bold text-xl">Tasks</h1>
      {tasks.length > 0 ? (
        <AllTasks tasks={tasks} handleDeleteTask={handleDeleteTask}/>
      ) : (
        <h1 className="text-center p-10">You have no Task</h1>
      )}

      <button
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded animate-bounce focus:animate-none hover:animate-none inline-flex text-md  mt-3 tracking-wide "
        onClick={() => setAddTask(true)}
      >
        +Task
      </button>

  
    </div>
  );
};

export default Tasks;
