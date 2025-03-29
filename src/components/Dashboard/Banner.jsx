import React from 'react'


const Banner = () => {

  return (
    <main className=' relative flex flex-col justify-between items-end  rounded-md h-[30%]
    bg-[url(https://www.kmutt.ac.th/wp-content/uploads/2020/08/kmutt-top-home.jpg)]
    bg-local bg-center bg-no-repeat bg-cover p-4 shadow-2xl'>
        <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-white text-4xl font-bold drop-shadow-md bg-white/30 backdrop-blur-sm rounded-xl shadow-md p-10">Dashboard</h1>
        </div>
        <div className='text-white'>
            Dashboard / Nattaphan Pumipak Fullstack Project
        </div>
        <div className='bg-white p-4 rounded-md'>
            Taskmanager Project
        </div>
    </main>
  )
}

export default Banner