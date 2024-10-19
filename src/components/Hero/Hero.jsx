import React from 'react'
import { motion } from "framer-motion"
import { FiGithub, FiFileText  } from "react-icons/fi";

export const Hero = () => {
    return (
        <main id='home' className='px-8 py-20 lg:py-32 md:px-24 h-fit flex flex-col items-center font-fontBody bg-colorBg text-colorText'>
            <div className='flex flex-col'>
                <div className='text-xl sm:text-2xl font-medium tracking-wider flex flex-col gap-y-5'>
                    <p>Hey there!, I'm-</p>
                    <h1 className='font-fontHead text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>Abdul Razith</h1>
                    <p className=' leading-relaxed'><span className=''>Frontend Developer.</span><br /><span className='text-gray-400'>A self-taught coder with a passion for web development.</span></p>
                </div>
                <div className='mt-10 sm:mt-14 flex flex-col sm:flex-row sm:gap-x-5 gap-y-5 justify-around sm:justify-start'>
                    <motion.a whileHover={{scale: 1.1 }} whileTap={{ scale: 0.8 }} href="https://drive.google.com/file/d/1343nfEUMEsKD96_Iv2U83Fa9SeSOhwAv/view?usp=sharing" target="_blank"><button className='bg-red-500 hover:bg-red-700 duration-500 w-44 py-4 px-10 sm:py-5 rounded-3xl flex items-center sm:justify-center gap-x-2'><FiFileText size={22}/><span>Resume</span></button></motion.a>
                    <motion.a whileHover={{scale: 1.1 }} whileTap={{ scale: 0.8 }} href="https://github.com/abdul-razith" target="_blank"><button className='bg-red-500 hover:bg-red-700 duration-500 w-44 py-4 px-10 sm:py-5 rounded-3xl flex items-center sm:justify-center gap-x-2'><FiGithub size={22}/><span>GitHub</span></button></motion.a>
                </div>
            </div>
        </main>
    )
}
