import React from 'react'
import TaskSummary from './TaskSummary'

const MainDashboard = () => {
  return (
    <div className='shadow-md h-[65%] mt-4 rounded-lg p-4 bg-slate-300 w-full'>


      <div className='h-full flex flex-col justify-center items-center p-4'>
        <div className='flex justify-between items-center h-[50%] w-[80%]'>
          <div className='p-4 w-[62%] text-center bg-white h-[90%] rounded-2xl shadow-2xl flex flex-col justify-between items-start'>
            <div>
              <h1 className=''> some icon Block 1 at row 1</h1>
            </div>
            <div>
              <h1 className=''>Footer</h1>
            </div>
          </div>
          <TaskSummary />
        </div>
        <div className='flex justify-between items-center h-[50%] w-[80%]'>
          <div className='w-[62%] flex justify-between text-center  h-[90%] '>
            <div className='rounded-2xl bg-white w-[48%] shadow-lg '>
              <h1>Block 1 at row 2</h1>
            </div>
            <div className='rounded-2xl bg-white w-[48%] shadow-2xl '>
              <h1>Block 2 at row 2</h1>
            </div>
          </div>
          <div className='w-[35%] text-center bg-white h-[90%] rounded-2xl shadow-2xl '>
            <h1>Block 3 at row 2</h1>
          </div>
        </div>
      </div>



    </div>
  )
}

export default MainDashboard