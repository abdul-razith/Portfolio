import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux'
import { FiMenu, FiX } from "react-icons/fi";
import { toggle, menuToggle } from '../../slice/navbarSlice';

export const Navbar = () => {

    const { theme, toggleMenu } = useSelector(state => state.navbar);
    const dispatch = useDispatch();

    // Prevent scroll is the mobile nav is opened
    useEffect(() => {
        if (toggleMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [toggleMenu]);

    // Set the theme class to the body tag.
    function setTheme() {
        document.body.className = "";
        document.body.classList.add(`theme-${theme}`);
    }
    setTheme();

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}

                className='fixed w-full h-20 px-8 lg:px-24 font-fontHead tracking-wider flex justify-between items-center bg-colorBg text-colorText duration-600 ease-linear z-40'>

                <div className="w-fit font-fontHead font-extrabold text-3xl">
                    <a href=""><h1>AR</h1></a>
                </div>

                <div className='hidden md:block text-base'>
                    <ul className='flex justify-between gap-x-8'>
                        <motion.li
                        whileHover={{ scale : 1.2 }}
                        className='hover:underline'>
                            <a href="#home">Home</a>
                        </motion.li>
                        <motion.li
                        whileHover={{ scale : 1.2 }}
                        className='hover:underline'>
                            <a href="#about">About</a>
                        </motion.li>
                        <motion.li
                        whileHover={{ scale : 1.2 }}
                        className='hover:underline'>
                            <a href="#skills">Skills</a>
                        </motion.li>
                        <motion.li
                        whileHover={{ scale : 1.2 }}
                        className='hover:underline'>
                            <a href="#projects">Projects</a>
                        </motion.li>
                        <motion.li
                        whileHover={{ scale : 1.2 }}
                        className='hover:underline'>
                            <a href="#contact">Contact</a>
                        </motion.li>
                    </ul>
                </div>

                {/* For mobile nav menu */}
                {
                    toggleMenu &&
                    <div
                        className='mobile-nav text-lg'>
                        <motion.ul
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{opacity : 0, y:-1000}}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        
                        className='w-full py-6 absolute top-0 left-0 flex flex-col items-center gap-y-7 bg-colorNav shadow-customShadow'>
                            <motion.li
                            whileTap={{ scale : 0.8 }}
                            className='hover:underline'>
                                <a href="#home" onClick={() => dispatch(menuToggle())}>Home</a>
                            </motion.li>
                            <motion.li
                            whileTap={{ scale : 0.8 }}
                            className='hover:underline'>
                                <a href="#about" onClick={() => dispatch(menuToggle())}>About</a>
                            </motion.li>
                            <motion.li
                            whileTap={{ scale : 0.8 }}
                            className='hover:underline'>
                                <a href="#skills" onClick={() => dispatch(menuToggle())}>Skills</a>
                            </motion.li>
                            <motion.li
                            whileTap={{ scale : 0.8 }}
                            className='hover:underline'>
                                <a href="#projects" onClick={() => dispatch(menuToggle())}>Projects</a>
                            </motion.li>
                            <motion.li
                            whileTap={{ scale : 0.8 }}
                            className='hover:underline'>
                                <a href="#contact" onClick={() => dispatch(menuToggle())}>Contact</a>
                            </motion.li>
                            <li>
                                <div className="w-fit">
                                    <label className="cursor-pointer inline-flex items-center relative">
                                        <input
                                            className="peer hidden"
                                            id="toggle"
                                            type="checkbox"
                                            onChange={() => dispatch(toggle())}
                                        />
                                        <div
                                            className="relative w-[60px] h-[30px] bg-zinc-900 peer-checked:bg-white rounded-full after:absolute after:content-[''] after:w-[24px] after:h-[24px] after:bg-gradient-to-r from-zinc-900 to-zinc-900 peer-checked:after:from-orange-500 peer-checked:after:to-yellow-400 after:rounded-full after:top-[3px] after:left-[4px] peer-checked:after:left-[32px] shadow-sm duration-300 after:duration-300 after:shadow-md"
                                        ></div>
                                        <svg
                                            height="24"
                                            width="24"
                                            viewBox="0 0 24 24"
                                            className="fill-white absolute w-[16px] h-[16px] left-[8px] top-[7px] peer-checked:opacity-0 transition-opacity duration-300"
                                        >
                                            <path
                                                d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                                            ></path>
                                        </svg>
                                        <svg
                                            height="24"
                                            width="24"
                                            viewBox="0 0 24 24"
                                            className="fill-black opacity-0 peer-checked:opacity-100 peer-checked:fill-orange-500 absolute w-[16px] h-[16px] right-[8px] top-[7px] transition-opacity duration-300"
                                        >
                                            <path
                                                d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                                            ></path>
                                        </svg>
                                    </label>
                                </div>
                            </li>
                        </motion.ul>
                    </div>
                }

                <div className="w-fit hidden md:block">
                    <label className="cursor-pointer inline-flex items-center relative">
                        <input
                            className="peer hidden"
                            id="toggle"
                            type="checkbox"
                            onChange={() => dispatch(toggle())}
                        />
                        <div
                            className="relative w-[60px] h-[30px] bg-zinc-900 peer-checked:bg-white rounded-full after:absolute after:content-[''] after:w-[24px] after:h-[24px] after:bg-gradient-to-r from-zinc-900 to-zinc-900 peer-checked:after:from-orange-500 peer-checked:after:to-yellow-400 after:rounded-full after:top-[3px] after:left-[4px] peer-checked:after:left-[32px] shadow-sm duration-300 after:duration-300 after:shadow-md"
                        ></div>
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            className="fill-white absolute w-[16px] h-[16px] left-[8px] top-[7px] peer-checked:opacity-0 transition-opacity duration-300"
                        >
                            <path
                                d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"
                            ></path>
                        </svg>
                        <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            className="fill-black opacity-0 peer-checked:opacity-100 peer-checked:fill-orange-500 absolute w-[16px] h-[16px] right-[8px] top-[7px] transition-opacity duration-300"
                        >
                            <path
                                d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"
                            ></path>
                        </svg>
                    </label>
                </div>

                <button className={`md:hidden cursor-pointer ${toggleMenu ? 'rotate-90' : ''} transition-transform duration-300`} onClick={() => dispatch(menuToggle())}>
                    {
                        toggleMenu ? <FiX size={26} /> : <FiMenu size={26} />
                    }
                </button>
            </motion.nav>
        </>
    )
}
