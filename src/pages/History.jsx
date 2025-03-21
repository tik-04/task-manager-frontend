import React from 'react'
import { motion } from 'framer-motion'

const History = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}>
    <div>History</div>
    </motion.div>
  )
}

export default History