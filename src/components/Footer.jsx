import React from 'react'
import { FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className="container">
        <div className="flex flex-row justify-between items-center border-t dark:border-white w-full py-4 dark:text-white">
            <p className="text-sm">
            &copy; Ian Clark L. Cañete {new Date().getFullYear()} - All Rights Reserved
            </p>
            <a href="https://www.facebook.com/Ic.0716" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-xl cursor-pointer"/></a>
        </div>
    </div>
    </>
  )
}

export default Footer
