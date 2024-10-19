import React from 'react'
import { motion } from "framer-motion"
import { IoIosMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import './contact.css'

export const Contact = () => {
    return (
        <div id='contact' className='contact px-8 md:px-24 py-16 lg:py-20 tracking-wider bg-colorBg text-colorText text-lg font-fontBody'>
            <div className='flex flex-col items-center gap-y-5'>
                <h2 className='font-fontHead text-3xl'>Contact</h2>
                <p>Feel free to connect with me</p>
                <div className='btns flex gap-x-5 duration-500'>
                    <a href="mailto:razith01@gmail.com" target='_blank'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <IoIosMail />
                            <p>E-mail</p>
                        </motion.button>
                    </a>
                    <a href="https://www.linkedin.com/in/abdul-razith" target='_blank'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <FaLinkedin />
                            <p>LinkedIn</p>
                        </motion.button>
                    </a>
                </div>
            </div>
        </div>
    )
}
