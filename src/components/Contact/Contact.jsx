import React from 'react'
import { motion } from "framer-motion"
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import './contact.css'

export const Contact = () => {
    return (
        <div className='contact px-8 md:px-24 pb-20 lg:pb-32 tracking-wider bg-colorBg text-colorText text-xl font-fontBody'>
            <div className='flex flex-col items-center gap-y-5'>
                <h2 className='font-fontHead text-4xl'>Contact</h2>
                <p>Feel free to connect with me</p>
                <div className='btns flex gap-x-5'>
                    <a href="mailto:razith01@gmail.com" target='_blank'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <IoIosMail />
                            <p>E-mail</p>
                        </motion.button>
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-razith" target='_blank'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <FaLinkedin />
                            <p>LinedIn</p>
                        </motion.button>
                    </a>
                </div>
            </div>
        </div>
    )
}
