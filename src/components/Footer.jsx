import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";

function Footer() {
  return (
    <>
    <div className="pt-5 sm:pt-5">
        <div className="container px-5 sm:px-0 md:px-5">
            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-400 dark:border-gray-600 w-full py-4 dark:text-white">
              <div className='flex flex-row gap-3 mt-2 sm:mt-0'>
                <p className="text-sm">
                &copy; Ian Clark L. Cañete {new Date().getFullYear()} - All Rights Reserved
                </p>
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"><FaReact className="text-lg cursor-pointer"/></a>
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer"><IoLogoVercel className="text-lg cursor-pointer"/></a>
              </div>
              <div className='flex flex-row gap-2 mt-2 sm:mt-0'>
                <a href="https://www.facebook.com/Ic.0716" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-lg cursor-pointer"/></a>
                <a href="https://github.com/arzerra" target="_blank" rel="noopener noreferrer"><FaGithub className="text-lg cursor-pointer"/></a>
                <a href="https://www.linkedin.com/in/ianclarkcanete/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-lg cursor-pointer"/></a>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
