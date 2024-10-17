import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGlobe } from "react-icons/fa6";
import { SiJavascript } from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import './projects.css'

export const Projects = () => {
    return (
        <div className='px-8 md:px-24 pb-20 lg:pb-32 tracking-wider bg-colorBg text-colorText'>
            <h2 className='font-fontHead text-3xl mb-10'>Projects</h2>

            <div className='row border-2 border-colorText rounded-2xl p-10 flex flex-col gap-y-3 xl:flex-row lg:gap-y-5 justify-between items-center mb-8'>
                <div className='2xl:w-[60%] xl:w-[50%] w-full hidden sm:block'>
                    <img src="vibesky.png" alt="" className='rounded-lg' />
                </div>
                <div className='2xl:w-[36%] xl:w-[45%] w-full text-base flex flex-col gap-y-5 xl:justify-between text-justify font-fontBody leading-relaxed'>
                    <h3 className='text-xl'>VibeSky</h3>
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
                    <div className='btns flex justify-around xl:justify-between'>
                        <button>
                            <FaGithub />
                            <p>GitHub</p>
                        </button>
                        <button>
                            <FaGlobe />
                            <p>Live</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* ----- */}

            <div className='row border-2 border-colorText rounded-2xl p-10 flex flex-col gap-y-3 xl:flex-row lg:gap-y-5 justify-between items-center mb-8'>
                <div className='2xl:w-[60%] xl:w-[50%] w-full hidden sm:block'>
                    <img src="greenplate.png" alt="" className='rounded-lg' />
                </div>
                <div className='2xl:w-[36%] xl:w-[45%] w-full text-base flex flex-col gap-y-5 xl:justify-between text-justify font-fontBody leading-relaxed'>
                    <h3 className='text-xl'>GreenPlate</h3>
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
                    <div className='btns flex justify-around xl:justify-between'>
                        <button>
                            <FaGithub />
                            <p>GitHub</p>
                        </button>
                        <button>
                            <FaGlobe />
                            <p>Live</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
