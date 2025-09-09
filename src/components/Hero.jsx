import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <>
      <div className='container flex flex-col sm:flex-row pt-10'>
        <div className='flex flex-1 items-center justify-center' data-aos="fade-right">
            <img src="images/glow1.png" alt="Light Logo" className="w-80 sm:w-100 dark:hidden" />
            <img src="images/glow2.png" alt="Dark Logo" className="w-80 sm:w-100 hidden dark:block" />
        </div>
        <div className='flex flex-1 flex-col items-center justify-center mt-5 sm:mt-0'>
          <div className="flex flex-col space-y-10 sm:space-y-30 text-center">
            <div className="">
            <h1 className='dark:text-white text-4xl sm:text-5xl'>Hi, I'm Clark!</h1>
            <h1 className='dark:text-white text-3xl sm:text-5xl mt-2'>
            <Typewriter
              options={{
              strings: ["Full Stack Developer", "UI/UX Designer", "Aspiring Software Dev"],
              autoStart: true,
              loop: true,
              }}
            /></h1>
            </div>
            <div className="">
            <h1 className='dark:text-white sm:text-justify'>I'm an IT graduate passionate about turning ideas into functional, user-friendly web applications.</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
