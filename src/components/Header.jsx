import { Link } from "react-router-dom";
import { useState} from "react";
import Toggle from "./Toggle.jsx";
import { HashLink } from 'react-router-hash-link';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#AAAAAA] dark:bg-[#27374D] dark:text-white">
      <div className="container mx-auto flex justify-between items-center py-5 px-5 sm:px-0">
        <div className="flex items-center gap-2 font-[Quicksand] text-2xl">
          <a href="/"><img src="icon/logo1.png  " alt="" className="w-15 cursor-pointer"/></a>
          {/* <a href="/" className="text-lg"><h1>Click me!</h1></a> */}
        </div>
        
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-5">
            {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            }
          </div>
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-25 left-0 w-full bg-[#AAAAAA] dark:bg-[#27374D] z-50 md:static md:block md:w-auto md:h-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-5 items-center font-medium font-[Quicksand] text-lg p-4 md:p-0">
            <li><a 
                 href="/" 
                 className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                 hover:after:w-full">
                  Home
                </a>
            </li>
            <li><HashLink smooth
                 to="/#about" 
                 className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                 hover:after:w-full">
                  About
                </HashLink>
            </li>
            <li><a 
                  href="#experience" 
                  className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                  hover:after:w-full">
                    Experience
                    </a>
            </li>
            <li><a 
                 href="#projects" 
                 className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                 hover:after:w-full">
                  Projects
                  </a>
            </li>
            <li><a 
                 href="#certificate" 
                 className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:mt-1 after:transition-all after:duration-300
                 hover:after:w-full">
                  Certifications
                  </a>
            </li>
            <li><a 
                 href="#certificate" 
                 className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:mt-1 after:transition-all after:duration-300
                 hover:after:w-full">
                  Contacts
                  </a>
            </li>
            <li><Link 
                 to="/fonts" 
                 className="relative after:content-[''] after:sabsolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-black dark:after:bg-white after:mt-1 after:transition-all after:duration-300
                 hover:after:w-full">
                  Fonts
                  </Link>
            </li>
            <div className='fixed justify-center items-center sm:right-75 z-50 hidden sm:block'>
              <Toggle/>
            </div>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
