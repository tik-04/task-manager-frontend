import React from 'react'
import { FcExpired } from 'react-icons/fc'
import { FcApproval } from "react-icons/fc";

const UpcomingTask = () => {

    const mockData = [
        {taskname:"test1",finishDay:"2025-03-29"},
        {taskname:"test2",finishDay:"2025-03-30"},
        {taskname:"test3",finishDay:"2025-03-31"},
    ]

  return (
    <article className='rounded-2xl bg-white w-[48%] shadow-lg p-3'>


        <div className="flex justify-between w-full items-center">
            <h1>Upcoming Tasks</h1>
            <FcExpired />
        </div>

        <hr className="my-2 border-t border-gray-300 w-full" />

        {/* main content */}

        <ol className='text-start'>
            {mockData.map((data) => (
                <div className='flex justify-between items-center'>
                    <li className=''>
                        {data.taskname}
                        <h1 className='text-red-400'>Deadline: {data.finishDay}</h1>
                    </li>
                    <button 
                    className="border-[1px] h-[80%] border-green-400 text-green-600 hover:border-green-200 hover:text-green-400 p-1.5 rounded-md"
                    // onClick={() => handleFinishTask(task.id,task.status)}
                    >
                        <FcApproval />
                    </button>
                </div>
            ))}
        </ol>

        
    </article>
  )
}

export default UpcomingTask