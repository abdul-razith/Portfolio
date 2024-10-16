import React from 'react'
import { easeIn, easeInOut, motion } from "framer-motion"
import './about.css'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaPython, FaAws } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss, SiDjango, SiMysql, SiRedux } from "react-icons/si";

export const About = () => {

    const cardAnimationProps = {
        whileHover : {scale: 1.1},
        transition : {duration: 0.2, ease: 'linear'}
    }

    return (
        <div className='bg-colorBg text-colorText px-8 md:px-24 pb-20 lg:pb-32 tracking-wider'>
            <h2 className='font-fontHead text-4xl mb-10 text-center'>About Me</h2>
            <div className='about font-fontBody text-xl flex flex-col-reverse gap-y-20 lg:flex-row justify-between items-center'>
                <div className='lg:w-[50%] text-justify leading-relaxed'>
                    <p>Hey! I'm Abdul Rahman, I've been close to a computer since an early age, and been passionate about it ever since.</p>
                    <br />
                    <p>I really liked to build stuff using no-code tools
                        back in 2010, and from that, I explored how to code myself, fast-forward to today, I do programming in various languages and technologies, and had the privilege to worked in a Recruitment Company
                        and a SaaS Company
                        I'm interested in building something awesome with code and automate tasks with code, currently focused on Web & Mobile Development,
                        Open Source
                        and Competitive Programming</p>
                    <br />
                    <p>When I'm not coding I play games with my friends, watch some show on Netflix, or if the weather's good, play basketball! 🏀</p>
                </div>
                <div className='sm:w-[70%] lg:w-[35%] flex justify-center'>
                    <img src="pic2.jpg" alt="my pic" className='rounded-full' />
                </div>
            </div>

            <div className='font-fontBody text-xl mt-20'>
                <h2 className='font-fontHead text-4xl mb-10 text-center'>Skills</h2>
                <div className='skills w-full flex flex-wrap justify-evenly gap-y-2'>
                    <motion.div {...cardAnimationProps}>
                        <FaHtml5 />
                        <p>HTML</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <FaCss3Alt />
                        <p>CSS</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <FaReact />
                        <p>React JS</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <FaGithub />
                        <p>GitHub</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <FaPython />
                        <p>Python</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <FaAws />
                        <p>AWS</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <SiJavascript />
                        <p>JavaScript</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <SiTailwindcss />
                        <p>Tailwind</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <SiDjango />
                        <p>Django</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <SiMysql />
                        <p>MySQL</p>
                    </motion.div>
                    <motion.div {...cardAnimationProps}>
                        <SiRedux />
                        <p>Redux</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
