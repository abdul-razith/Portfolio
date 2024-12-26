import React from 'react'
import { motion } from "framer-motion"
import { FiGithub, FiFileText  } from "react-icons/fi";

export const Hero = () => {
    return (
        <main id='home' className='px-8 py-28 lg:py-36 md:px-24 h-fit flex flex-col items-center font-fontBody bg-colorBg text-colorText'>
            <div className='flex flex-col'>
                
                <motion.div
                initial = {{ opacity:0, x:-1000 }}
                animate = {{ opacity:1, x:0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className='text-xl sm:text-2xl font-medium tracking-wider flex flex-col gap-y-5'>
                    <p>Hey there!, I'm-</p>
                    <h1 className='font-fontHead text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold'>Abdul Razith</h1>
                    <p className=' leading-relaxed'><span className=''>Frontend Developer.</span><br /><span className='text-gray-400'>A dedicated self-learner with a passion for creating web applications.</span></p>
                </motion.div>

                <motion.div
                initial = {{opacity : 0, y : 50}}
                animate = {{opacity : 1, y : 0}}
                transition={{duration : 0.8, ease : "linear"}}
                className='mt-10 sm:mt-14 font-semibold flex flex-col sm:flex-row sm:gap-x-5 gap-y-5 justify-around sm:justify-start duration-500'>
                    <motion.a whileHover={{scale: 1.1 }} whileTap={{ scale: 0.8 }} href="https://drive.google.com/file/d/1SJ89T4XMhr_QCW2vAl7cLE0C42h5f5A4/view?usp=sharing" target="_blank"><button className='bg-colorSocialBg hover:bg-colorSocialHover w-44 py-4 px-10 sm:py-5 rounded-3xl flex items-center sm:justify-center gap-x-2'><FiFileText size={22}/><span>Resume</span></button></motion.a>
                    <motion.a whileHover={{scale: 1.1 }} whileTap={{ scale: 0.8 }} href="https://github.com/abdul-razith" target="_blank"><button className='bg-colorSocialBg hover:bg-colorSocialHover w-44 py-4 px-10 sm:py-5 rounded-3xl flex items-center sm:justify-center gap-x-2'><FiGithub size={22}/><span>GitHub</span></button></motion.a>
                </motion.div>
            </div>
        </main>
    )
}
