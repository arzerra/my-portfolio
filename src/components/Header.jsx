import { useState } from "react";
import DarkMode from "./Toggle.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto flex justify-between items-center py-5 px-4">
        <h1 className="text-2xl font-bold">Clark</h1>

        {/* Hamburger button (only on mobile) */}
        
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex gap-5">
          <DarkMode />
          ☰
          </div>
        </button>

        {/* Nav links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white dark:bg-gray-800 md:static md:block md:w-auto`}
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
