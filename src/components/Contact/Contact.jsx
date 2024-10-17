import React from 'react'
import './contact.css'

export const Contact = () => {
    return (
        <div className='contact px-8 md:px-24 pb-20 lg:pb-32 tracking-wider bg-colorBg text-colorText text-xl font-fontBody'>
            <div className='flex flex-col items-center gap-y-5'>
                <h2 className='font-fontHead text-3xl'>Contact</h2>
                <p>Feel free to connect with me</p>
                <div className='btns flex gap-x-5'>
                    <button>mail</button>
                    <button>linkedin</button>
                </div>
            </div>
        </div>
    )
}
