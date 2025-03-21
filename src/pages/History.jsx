import React from 'react'
import { motion } from 'framer-motion'
import Table from '../components/History/Table'

const History = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}>
      <div>History</div>
      <Table />
    </motion.div>
  )
}

export default History