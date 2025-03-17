import React, {useState,useEffect} from 'react'
import axios from 'axios';

const Tasks = () => {
  const [tasks,setTasks] = useState([])


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks", {withCredentials: true}); // ✅ ใช้ axiosInstance เพื่อแนบ Token
        console.log("Tasks:", response.data.data)
        setTasks(response.data.data)

      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    
    <div className='p-4'>
      <h1 className='text-center'>Tasks</h1>
      {tasks.length > 0 ? (
          tasks.map((task) => (
            <ul className='border border-2-black' key={task.id}>
              <li>{task.title}</li> {/*// ✅ แสดง title ของ task */}
              <li>{task.description}</li>
              <li>status:{task.status}</li>
              <li>finishDay:{task.due_date}</li>
            </ul>
          ))
      ) : (
        <p>Loading tasks...</p>
      )}

      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        +Task
      </button>
    </div>
  )
}

export default Tasks