import React from 'react'
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaPython, FaAws } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss, SiDjango, SiMysql, SiRedux } from "react-icons/si";
import './skills.css'

export const Skills = () => {
    const cardAnimationProps = {
        whileHover: { scale: 1.1 },
        transition: { duration: 0.2, ease: 'linear' }
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div id='skills' className='bg-colorBg text-colorText font-fontBody text-lg px-8 md:px-24 py-16 lg:py-20 tracking-wider'>
            <h2 className='font-fontHead text-3xl mb-10 text-center'>Skills</h2>
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}

                className='skills font-medium w-full flex flex-wrap justify-evenly gap-y-2'>
                <motion.div {...cardAnimationProps}>
                    <FaHtml5 />
                    <p>HTML</p>
                </motion.div>
                <motion.div {...cardAnimationProps}>
                    <FaCss3Alt />
                    <p>CSS</p>
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
                    <FaReact />
                    <p>React JS</p>
                </motion.div>
                <motion.div {...cardAnimationProps}>
                    <SiRedux />
                    <p>Redux</p>
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
                    <SiDjango />
                    <p>Django</p>
                </motion.div>
                <motion.div {...cardAnimationProps}>
                    <SiMysql />
                    <p>MySQL</p>
                </motion.div>
            </motion.div>
        </div>
    )
}
