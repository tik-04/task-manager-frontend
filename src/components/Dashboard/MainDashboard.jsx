import React from 'react'
import TaskSummary from './TaskSummary'
import Userinfo from './Userinfo'
import UpcomingTask from './UpcomingTask'
import ProgressChart from './ProgressChart'

const MainDashboard = () => {
  return (
    <main className='shadow-md h-[65%] mt-4 rounded-lg p-4 bg-slate-300 w-full'>

      <main className='h-full flex flex-col justify-center items-center p-4'>
        <section className='flex justify-between items-center h-[50%] w-[80%]'>
          <Userinfo />
          <TaskSummary />
        </section>
        <section className='flex justify-between items-center h-[50%] w-[80%]'>
          <section className='w-[62%] flex justify-between text-center  h-[90%] '>
            <UpcomingTask />
            <ProgressChart />
          </section>
          <article className='w-[35%] text-center flex justify-center items-center bg-white h-[90%] rounded-2xl shadow-2xl '>
            <h1>Coming Soon...</h1>
          </article>
        </section>
      </main>



    </main>
  )
}

export default MainDashboard