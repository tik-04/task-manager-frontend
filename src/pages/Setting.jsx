import React from 'react'
import { motion } from 'framer-motion'

const Setting = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}>
    <div>Setting</div>
    </motion.div>
  )
}

export default Setting