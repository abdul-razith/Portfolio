import React from 'react'

export const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer id='footer' className="contact px-8 md:px-24 pt-6 pb-3 lg:pt-10 tracking-wider flex flex-col items-center bg-colorBgs text-colorText text-sm font-fontBody">
            <div className="flex flex-col text-center gap-y-3 w-[80%]">
                <p>Designed and Developed by Abdul Razith.</p>
                <p>Built with React.js & Hosted on Firebase.</p>
                <p className="text-xs">&copy; 2024 All rights reserved.</p>
            </div>
        </footer>
    )
}
