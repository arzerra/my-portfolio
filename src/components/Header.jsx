import { useState } from "react";
import DarkMode from "./Toggle.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-[#27374D] dark:text-white">
      <div className="container mx-auto flex justify-between items-center py-5 px-3 sm:px-0">
        <a href="/"><img src="icon/logo1.png  " alt="" className="w-15"/></a>
        
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-5">
          <DarkMode />
            {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            }
          </div>
        </button>

        {/* Nav links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-25 left-0 w-full bg-white dark:bg-[#27374D] md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-5 items-center text-xl p-4 md:p-0">
            <li><a href="">About</a></li>
            <li><a href="">Experience</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Certification & Awards</a></li>
            <li className="hidden sm:block"><DarkMode /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
