import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

function Hero() {
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
    <div className="pt-30 sm:pt-50">
      <div className='container flex flex-col sm:flex-row pt-10 px-5 sm:px-0'>
        {/* 1st */}
        <div className='flex flex-1 flex-col items-center justify-center mt-5 sm:mt-0 order-2 sm:order-1'>
          <div className="flex flex-col space-y-10 sm:space-y-15 text-center">
            <div className="">
            <h1 className="text-black dark:text-white text-4xl sm:text-6xl font-['Rubik_Iso']">Hi, I'm Clark!</h1>
            <h1 className="dark:text-white text-2xl sm:text-3xl mt-2 font-['Bungee_Shade']">
            <Typewriter
              options={{
              strings: ["Full Stack Developer", "UI/UX Designer", "Aspiring Software Dev"],
              autoStart: true,
              loop: true,
              }}
            /></h1>
            <div className="-mt-3 relative inline-block">
              <a href="/documents/Resume.pdf" download>
                <button className="font-['Comic_Relief'] text-[1rem] text-black dark:text-white uppercase px-5 py-2.5 rounded-[10px] border-2 border-[#black] dark:border-[#fafafa] bg-[#white] dark:bg-[transparent] shadow-[3px_3px_0_0_black] dark:shadow-[3px_3px_0_0_#fafafa] cursor-pointer my-9 active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
                  <div className="flex gap-2 items-center">
                  Resume
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                  </div>
                </button>
              </a>  
                <img 
                  src="gif/pointer.gif" 
                  alt="pointer" 
                  className="absolute -right-13 top-26 -translate-y-1/2 w-20 z-20 pointer-events-none"
                />
            </div>
            </div>
            <div className="text-xl">
              <h1 className="font-['Barlow_Condensed'] dark:text-white text-justify sm:text-justify indent-15">
                I'm an IT graduate, passionate about transforming ideas into functional, user-friendly web applications. 
                I enjoy building digital solutions that not only work flawlessly but also create meaningful experiences for users.</h1>
            </div>
          </div>
        </div>
        {/* 2nd */}
        <div className='flex flex-1 items-center justify-center sm:justify-end order-1 sm:order-2'>
            <img src="images/grad.jpg" alt="GradPic" className="w-70 sm:w-100 rounded-4xl shadow-xl border-5 border-black dark:border-white" data-aos="fade-left"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
