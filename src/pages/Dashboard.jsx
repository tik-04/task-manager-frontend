import React from 'react'
import Banner from '../components/Dashboard/banner'
import { motion } from 'framer-motion'
import MainDashboard from '../components/Dashboard/MainDashboard'

const Dashboard = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className='h-full'>
        <Banner />
        <MainDashboard />
    </motion.div>
    
  )
}

export default Dashboard