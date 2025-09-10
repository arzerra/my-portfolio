import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
    <div className="mt-20">
      <div className='container flex flex-col sm:flex-row pt-10'>
        <div className='flex flex-1 items-center justify-center' data-aos="fade-right">
            <img src="gif/1.gif" alt="Light Logo" className="w-70 sm:w-100 dark:hidden" />
            <img src="images/glow2.png" alt="Dark Logo" className="w-70 sm:w-100 hidden dark:block" />
        </div>
        <div className='flex flex-1 flex-col items-center justify-center mt-5 sm:mt-0'>
          <div className="flex flex-col space-y-10 sm:space-y-30 text-center">
            <div className="">
            <h1 className="text-black dark:text-white text-4xl sm:text-5xl font-['Slabo_13px']">Hi, I'm Clark!</h1>
            <h1 className="dark:text-white text-2xl sm:text-3xl mt-2 font-['Bungee_Shade']">
            <Typewriter
              options={{
              strings: ["Full Stack Developer", "UI/UX Designer", "Aspiring Software Dev"],
              autoStart: true,
              loop: true,
              }}
            /></h1>
            <div>
            <a href="/documents/Resume.pdf" download>
              <button className="text-[1rem] text-black dark:text-white uppercase px-5 py-2.5 rounded-[10px] border-2 border-[#black] dark:border-[#fafafa] bg-[#white] dark:bg-[transparent] shadow-[3px_3px_0_0_black] dark:shadow-[3px_3px_0_0_#fafafa] cursor-pointer my-9 active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
                Resume
              </button>
            </a>  
            </div>
            </div>
            <div className="">
            <h1 className='dark:text-white sm:text-justify'>I'm an IT graduate passionate about turning ideas into functional, user-friendly web applications.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero
