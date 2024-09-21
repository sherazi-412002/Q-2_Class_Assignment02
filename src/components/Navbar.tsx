
import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='w-full h-20 fixed md:h-16 text-white bg-black flex justify-between items-center text-center '>
            <div className='ml-5 md:ml-10 text-xl md:2xl lg:text-3xl font-bold text-pink-600'>SYED SHOAIB SHERAZI</div>
            <div className='flex flex-row text-xl mr-10 lg:mr-20 font-semibold'>
                <div className='hidden md:block md:mx-[15px] lg:mx-[25px] cursor-pointer '>Home</div>
                <div className='hidden md:block md:mx-[15px] lg:mx-[25px] cursor-pointer '>About</div>
                <div className='hidden md:block md:mx-[15px] lg:mx-[25px] cursor-pointer '>Skills</div>
                <div className='hidden md:block md:mx-[15px] lg:mx-[25px] cursor-pointer '>Project</div>
                <div className='hidden md:block md:mx-[15px] lg:mx-[25px] cursor-pointer '>Contact</div>
            </div>
            <div className='md:hidden'>
                <a className='text-5xl mr-7' href="#">&#8801;</a>
            </div>
        </nav>
        
    </div>
  )
}

export default Navbar