import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

function About() {
    const images = [
      {light: "images/grad.jpg", dark: "images/grad.jpg"},
      {light: "gif/1.gif", dark: "images/glow2.png"}
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);
  
  return (
    <>
      <div id="about" className="py-20">
        <div className='container  pt-10 px-5 sm:px-0 md:px-5'>
          <div className="flex flex-col sm:flex-row">
            {/* left */}
            <div className='flex flex-1 items-center justify-center sm:justify-start' data-aos="fade-right">
                <img src="gif/1.gif" alt="Light Logo" className="w-70 sm:w-100 dark:hidden transition-opacity duration-700 rounded-4xl" />
                <img src="images/glow2.png" alt="Dark Logo" className="w-70 sm:w-100 hidden dark:block transition-opacity duration-700 rounded-4xl" />
            </div>

            {/* right */}
            <div className='flex flex-1 flex-col items-center justify-center mt-5 sm:mt-0 bg-white shadow-xl rounded-4xl p-5 '>
              <div className="flex flex-col text-center justify-start items-center h-full">
                <div className="flex justify-center items-center">
                  <h1 className='text-center text-4xl'>About Clark!</h1>
                </div>
                <div className="flex justify-center items-center mt-5">
                  <h1 className='sm:text-justify'>I'm a Bachelor of Science in Information Technology graduate, asdfasdfsasdfasdfsadfasdf</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10 dark:text-white">
            <h1>EDUCATION</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default About