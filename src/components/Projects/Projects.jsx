import React from 'react'
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGlobe } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import './projects.css'

export const Projects = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
    };

    return (
        <div id='projects' className='px-8 md:px-24 py-16 lg:py-20 tracking-wider bg-colorBgs text-colorText'>
            <h2 className='font-fontHead text-3xl mb-10 text-center'>Projects</h2>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className='row bg-colorBg border-2 border-colorText rounded-2xl p-10 flex flex-col gap-y-3 xl:flex-row-reverse lg:gap-y-5 justify-between items-center mb-8'>
                <div className='2xl:w-[60%] xl:w-[50%] w-full hidden sm:block'>
                    <img src="fitlife360.png" alt="" className='rounded-lg' />
                </div>
                <div className='2xl:w-[36%] xl:w-[45%] w-full text-base font-medium flex flex-col gap-y-5 xl:justify-between text-justify font-fontBody leading-relaxed'>
                    <h3 className='text-xl font-semibold'>FitLife360</h3>
                    <p>&emsp;&emsp;A dynamic and responsive blog application built using HTML, Tailwind CSS, Next.js, and MongoDB. Features include a hero slider, category filters, and search functionality, with top scores in performance, accessibility, and SEO.</p>
                    <div className='tech flex gap-y-2 flex-wrap justify-evenly'>
                        <div>
                            <FaHtml5 />
                            <p>HTML</p>
                        </div>
                        <div>
                            <RiTailwindCssFill />
                            <p>Tailwind</p>
                        </div>
                        <div>
                            <SiJavascript />
                            <p>JS</p>
                        </div>
                        <div>
                            <SiNextdotjs />
                            <p>Next JS</p>
                        </div>
                        <div>
                            <SiVercel />
                            <p>Vercel</p>
                        </div>
                    </div>
                    <div className='btns flex justify-between xl:justify-between duration-500'>
                        <motion.a href="https://github.com/abdul-razith/blog-app" target='_blank' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <button>
                                <FaGithub />
                                <p>GitHub</p>
                            </button>
                        </motion.a>
                        <motion.a href="https://www.fitlife360.life/" target='_blank' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <button>
                                <FaGlobe />
                                <p>Live</p>
                            </button>
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* ------------- */}

            <motion.div

                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}

                className='row bg-colorBg border-2 border-colorText rounded-2xl p-10 flex flex-col gap-y-3 xl:flex-row lg:gap-y-5 justify-between items-center mb-8'>
                <div className='2xl:w-[60%] xl:w-[50%] w-full hidden sm:block'>
                    <img src="vibesky.png" alt="" className='rounded-lg' />
                </div>
                <div className='2xl:w-[36%] xl:w-[45%] w-full text-base font-medium flex flex-col gap-y-5 xl:justify-between text-justify font-fontBody leading-relaxed'>
                    <h3 className='text-xl font-semibold'>VibeSky</h3>
                    <p>&emsp;&emsp;A responsive single-page weather app built with React.js, utilizing the OpenWeatherMap API and other web technologies. This app allows users to search for current weather conditions, view 5-day and next 24 hours forecasts, and check air quality in cities worldwide.</p>
                    <div className='tech flex gap-y-2 flex-wrap justify-evenly'>
                        <div>
                            <FaHtml5 />
                            <p>HTML</p>
                        </div>
                        <div>
                            <FaCss3Alt />
                            <p>CSS</p>
                        </div>
                        <div>
                            <SiJavascript />
                            <p>JS</p>
                        </div>
                        <div>
                            <FaReact />
                            <p>React</p>
                        </div>
                        <div>
                            <RiFirebaseFill />
                            <p>Firebase</p>
                        </div>
                    </div>
                    <div className='btns flex justify-between xl:justify-between duration-500'>
                        <motion.a href="https://github.com/abdul-razith/VibeSky" target='blank' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <button>
                                <FaGithub />
                                <p>GitHub</p>
                            </button>
                        </motion.a>
                        <motion.a href="https://vibe-sky.web.app" target='blank' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <button>
                                <FaGlobe />
                                <p>Live</p>
                            </button>
                        </motion.a>
                    </div>
                </div>
            </motion.div>

            {/* ----- */}

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className='row bg-colorBg border-2 border-colorText rounded-2xl p-10 flex flex-col gap-y-3 xl:flex-row-reverse lg:gap-y-5 justify-between items-center mb-8'>
                <div className='2xl:w-[60%] xl:w-[50%] w-full hidden sm:block'>
                    <img src="greenplate.png" alt="" className='rounded-lg' />
                </div>
                <div className='2xl:w-[36%] xl:w-[45%] w-full text-base font-medium flex flex-col gap-y-5 xl:justify-between text-justify font-fontBody leading-relaxed'>
                    <h3 className='text-xl font-semibold'>GreenPlate</h3>
                    <p>&emsp;&emsp;A simple and responsive multi-page food restaurant application built using React.js and modern web technologies. This app is designed as a frontend-only solution, allowing users to explore various food options, add them to their cart, and proceed to checkout.</p>
                    <div className='tech flex gap-y-2 flex-wrap justify-evenly'>
                        <div>
                            <FaHtml5 />
                            <p>HTML</p>
                        </div>
                        <div>
                            <FaCss3Alt />
                            <p>CSS</p>
                        </div>
                        <div>
                            <SiJavascript />
                            <p>JS</p>
                        </div>
                        <div>
                            <FaReact />
                            <p>React</p>
                        </div>
                        <div>
                            <RiFirebaseFill />
                            <p>Firebase</p>
                        </div>
                    </div>
                    <div className='btns flex justify-between xl:justify-between duration-500'>
                        <motion.a href="https://github.com/abdul-razith/GreenPlate" target='_blank' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <button>
                                <FaGithub />
                                <p>GitHub</p>
                            </button>
                        </motion.a>
                        <motion.a href="https://green--plate.web.app" target='_blank' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <button>
                                <FaGlobe />
                                <p>Live</p>
                            </button>
                        </motion.a>
                    </div>
                </div>
            </motion.div>

        </div >
    )
}
