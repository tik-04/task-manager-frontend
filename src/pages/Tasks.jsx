import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";


const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [addTask,setAddTask] = useState(false)
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [date,setDate] = useState("")
  const [status,setStatus] = useState("pending")
  const [error,setError] = useState(false)

  const fetchTasks = async () => {
    console.log("Fetching tasks..."); 
    try {
      const response = await axios.get("http://localhost:3000/tasks", {
        withCredentials: true,
      }); // ✅ ใช้ axiosInstance เพื่อแนบ Token
      console.log("Tasks:", response.data.data);
      setTasks(response.data.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
 
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      const newTask = { title, description:desc, status, due_date: date };
      await axios.post(
        "http://localhost:3000/tasks",
         newTask,
        { withCredentials: true } // ✅ ให้ browser ส่ง Cookie ไปด้วย
      );

      fetchTasks();
      setTitle(""); 
      setDesc(""); 
      setStatus(""); 
      setDate("");
      
      setAddTask(false); // ✅ ปิด modal
    } catch(error) {
      console.error("Error create Task:",error)
      setError(error.response?.data?.message || "Failed to create task");
    }
  }



  return (
    <div className="p-4 flex flex-col items-center justify-center">
      {error && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-red-600">Error</h2>
            <p className="text-gray-700">{error}</p>
            <button
              onClick={() => setError(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}


      <h1 className="text-center font-bold text-xl">Tasks</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 p-10 gap-4">
        {tasks.length > 0 ? (
            tasks.map((task,index) => {
              const formattedDate = new Intl.DateTimeFormat('en-CA').format(new Date(task.due_date));
              return (
                  <ul className="border border-2-black p-4" key={task?.id ?? index}>
                    <li className="text-center mb-2 font-bold">{task.title}</li>
                    {/*// ✅ แสดง title ของ task */}
                    <li>{task.description}</li>
                    <li>status:{task.status}</li>
                    <li>finishDay:{formattedDate}</li>
                    <div className="flex justify-center items-center mt-2 gap-4">
                      <button className="border-[1px] border-red-400 text-red-600 hover:border-red-200 hover:text-red-400 p-1.5 rounded-md"><FontAwesomeIcon icon={faTrash}  className=""/></button>
                      <button className="border-[1px] border-blue-400 text-blue-600 hover:border-blue-200 hover:text-blue-400 p-1.5 rounded-md"><FontAwesomeIcon icon={faPenToSquare} /></button>
                    </div>
                  </ul>
              )
            })
        ) : (
            <p>You have no Task</p>
        )}
      </div>

      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      onClick={() => setAddTask(true)}>
        +Task
      </button>

      {/* <!-- Main modal --> */}
      { addTask ? (
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <div className="flex justify-between items-center">
                      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        Add your Task
                      </h1>
                      <button onClick={() => setAddTask(false)}><h1 className="text-red-600">X</h1></button>
                    </div>
      
                    <form className="space-y-4 md:space-y-6" onSubmit={(e) => handleCreateTask(e)}> 
                      <div>
                        <label
                          htmlFor="title"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          required=""
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="description"
                          className="block mb-2 text-sm font-medium text-gray-900 "
                        >
                          Description
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          placeholder="Your description"
                          maxLength={150}
                          rows={4}
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)}
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required=""
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              name="due_date"
                              id="due_date"
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className=""
                              required=""
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="due_date" className="text-gray-500">
                              finishDay
                            </label>
                          </div>
                        </div>

                        <label htmlFor="status">Status:</label>
                        <select name="status" id="status" onChange={(e) => setStatus(e.target.value)}>
                          <option value="pending">pending</option>
                          <option value="in-progress">in-progress</option>
                        </select>

                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-[#2563eb] hover:bg-[#1d4ed8] focus:ring-4 focus:outline-none focus:ring-[#93c5fd] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      >
                        Create Task
                      </button>
                    </form>
                  </div>
                </div>
              </div>
           ) : null}


    </div>
  );
};

export default Tasks;
