import React, {useState,useEffect} from 'react'
import axiosInstance from '../api/axiosInstance';

const Tasks = () => {
  const [tasks,setTasks] = useState([])


  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get("/tasks"); // ✅ ใช้ axiosInstance เพื่อแนบ Token
        console.log("Tasks:", response.data.data);

        if (Array.isArray(response.data.data)) {
          setTasks(response.data.data); // ✅ เช็คก่อนว่าเป็น array จริง
        } else {
          console.error("Invalid data format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    
    <div>
      <h1>Tasks</h1>
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
    </div>
  )
}

export default Tasks