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
      <div id="about" className="pt-20 sm:pt-30">
        <div className='container flex flex-col sm:flex-row pt-10 px-5 sm:px-0'>

          {/* left */}
          <div className='flex flex-1 items-center justify-center sm:justify-start' data-aos="fade-right">
              <img src="gif/1.gif" alt="Light Logo" className="w-70 sm:w-100 dark:hidden transition-opacity duration-700 rounded-4xl" />
              <img src="images/glow2.png" alt="Dark Logo" className="w-70 sm:w-100 hidden dark:block transition-opacity duration-700 rounded-4xl" />
          </div>

          {/* right */}
          <div className='flex flex-1 flex-col items-center justify-center mt-5 sm:mt-0'>
            <div className="flex flex-col space-y-10 sm:space-y-30 text-center">
              <div className="">
                <h1 className='dark:text-white sm:text-justify'>I'm an IT graduate, passionate about transforming ideas into functional, user-friendly web applications. I enjoy building digital solutions that not only work flawlessly but also create meaningful experiences for users.</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default About