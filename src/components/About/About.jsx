import React from 'react'
import './about.css'

export const About = () => {

    return (
        <div id='about' className='bg-colorBgs text-colorText px-8 md:px-24 py-14 lg:py-20 tracking-wider'>
            <h2 className='font-fontHead text-3xl mb-10 text-center'>About Me</h2>
            <div className='about font-fontBody text-lg flex flex-col-reverse gap-y-20 lg:flex-row justify-between items-center'>
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
                <div className='w-[75%] sm:w-[55%] lg:w-[35%] flex justify-center'>
                    <img src="pic2.jpg" alt="my pic" className='rounded-full' />
                </div>
            </div>
        </div>
    )
}
