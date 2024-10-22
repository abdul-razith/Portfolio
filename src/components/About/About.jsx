import React from 'react'
import { motion } from 'framer-motion'
import './about.css'

export const About = () => {

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div
            id='about' className='bg-colorBgs text-colorText px-8 md:px-24 py-14 lg:py-20 tracking-wider'>
            <h2 className='font-fontHead text-3xl mb-10 text-center'>About Me</h2>
            <motion.div

                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className='about font-fontBody text-lg flex flex-col-reverse gap-y-20 lg:flex-row justify-between items-center'>
                <div className='lg:w-[50%] text-justify leading-relaxed'>
                    <p>Hey! I'm Abdul Razith, my interest in coding and technology sparked when I got my first laptop in 2017 💻, which quickly became my favorite device. I spent countless hours playing racing 🏎️ and open-world games 🌍.</p>
                    <br />
                    <p>By 11th grade, I discovered programming languages, and I was inspired to embark on my coding journey during my last days of school. After completing my schooling, I pursued a B.Sc. in Computer Science 🎓, diving deeper into the world of coding. I’ve honed my skills in HTML, CSS, JavaScript, React, and Tailwind CSS, alongside medium-level proficiency in Python, MySQL, and Django.</p>
                    <br />
                    <p>When I’m not coding, I enjoy roaming with friends 🤗, indulging in PC gaming 🎮, staying fit with home workouts 🏋️‍♂️, or watching podcasts on YouTube 📺. I'm an introvert with a unique perspective on life, always ready to explore new ideas and opportunities.</p>
                </div>
                <motion.div
                    animate={{ scale: [1, 1.01, 1] }}
                    transition={{
                        duration: 0.6,         // Duration of one cycle
                        ease: "easeInOut",     // Easing for smooth motion
                        repeat: Infinity,      // Infinite loop
                        repeatType: "mirror",  // The animation reverses after every cycle
                    }}

                    className='w-[75%] sm:w-[55%] lg:w-[35%] flex justify-center'>
                    <img src="pic2.jpg" alt="my pic" className='rounded-full' />
                </motion.div>
            </motion.div>
        </div>
    )
}
