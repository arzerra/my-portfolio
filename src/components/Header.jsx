import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Toggle from "./Toggle.jsx";
import { HashLink } from 'react-router-hash-link';


function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#hero", "#about", "#experience", "#project", "#certificate"];
      let current = "#hero";
      sections.forEach((id) => {
        const el = document.querySelector(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#AAAAAA] dark:bg-[#27374D] dark:text-white">
      <div className="container mx-auto flex justify-between items-center py-5 px-5 sm:px-0 md:px-5">
        <div className="flex items-center gap-2 font-[Quicksand] text-2xl customCursor">
          <a href="/"><img src="icon/logo1.png  " alt="Logo" className="w-15 cursor-pointer"/></a>
          <Toggle/>
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
            <li><HashLink smooth
                 to="/#hero" 
                  className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                  ${activeSection === "#hero" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                >
                  Home
                </HashLink>
            </li>
            <li><HashLink smooth
                 to="/#about" 
                 className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                 ${activeSection === "#about" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
               >
                  About
                </HashLink>
            </li>
            <li><HashLink smooth 
                  to="#experience" 
                 className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                 ${activeSection === "#experience" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                >
                  Experience
                </HashLink>
            </li>
            <li><HashLink smooth 
                 to="#project" 
                 className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                 ${activeSection === "#project" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
               >
                  Projects
                </HashLink>
            </li>
            <li><HashLink smooth 
                 to="#certificate" 
                 className={`relative after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:h-[2px] after:bg-black dark:after:bg-white after:transition-all after:duration-300
                 ${activeSection === "#certificate" ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
                >
                  Certifications
                </HashLink>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;
