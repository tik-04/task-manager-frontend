import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Table from '../components/History/Table'
import axios from 'axios'

const History = () => {

  const [historyTask,setHistoryTask] = useState([])

  const fetchHistory = async () => {
    console.log("Fetching tasks...");
    try {
      const response = await axios.get("/tasks" , { withCredentials:true})
      console.log(response.data.data)
      setHistoryTask(response.data.data)
    } catch (error) {
      console.error("Fetching History Taks Error:",error)
      setHistoryTask([])
    }
  }

  useEffect(() => {
    fetchHistory();
  }, [])


  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}>
      <div>History</div>
      <Table historyTask={historyTask}/>
    </motion.div>
  )
}

export default History