import React from 'react'


const Banner = () => {

  return (
    <div className='flex flex-col justify-between items-end  rounded-md h-[30%]
    bg-[url(https://www.kmutt.ac.th/wp-content/uploads/2020/08/kmutt-top-home.jpg)]
    bg-local bg-center bg-no-repeat bg-cover p-4 shadow-2xl'>
        <div className='text-white'>
            Dashboard / Nattaphan Pumipak Fullstack Project
        </div>
        <div className='bg-white p-4 rounded-md'>
            Taskmanager Project
        </div>
    </div>
  )
}

export default Banner