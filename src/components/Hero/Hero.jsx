import React from 'react'
import { motion } from "framer-motion"
import { FiGithub, FiFileText  } from "react-icons/fi";

export const Hero = () => {
    return (
        <main className='px-8 py-20 md:px-24 h-fit lg:h-screen flex flex-col items-center font-fontBody bg-colorBg text-colorText'>
            <div className='flex flex-col'>
                <div className='text-xl sm:text-3xl font-medium tracking-widest flex flex-col gap-y-5'>
                    <p>Hey there!, I'm-</p>
                    <h1 className='font-fontHead text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold'>Abdul Razith</h1>
                    <p className='w-full xl:w-[70%] leading-relaxed'><span>Frontend Developer.</span> <span className='text-gray-400'>A self-taught coder with a passion for web development.</span></p>
                </div>
                <div className='mt-10 sm:mt-14 flex flex-col sm:flex-row sm:gap-x-5 gap-y-5 justify-around sm:justify-start'>
                    <motion.a whileHover={{scale: 1.1 }} whileTap={{ scale: 0.8 }} href="#"><button className='bg-red-500 hover:bg-red-700 duration-500 w-44 py-4 px-10 sm:py-5 rounded-3xl flex items-center sm:justify-center gap-x-2'><FiFileText size={22}/><span>Resume</span></button></motion.a>
                    <motion.a whileHover={{scale: 1.1 }} whileTap={{ scale: 0.8 }} href="#"><button className='bg-red-500 hover:bg-red-700 duration-500 w-44 py-4 px-10 sm:py-5 rounded-3xl flex items-center sm:justify-center gap-x-2'><FiGithub size={22}/><span>GitHub</span></button></motion.a>
                </div>
            </div>
        </main>
    )
}
