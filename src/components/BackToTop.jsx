import React, { useState, useEffect } from "react";
import { PiArrowFatLinesUpFill } from "react-icons/pi";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-10 right-5 sm:right-20 z-[9999] cursor-pointer transition-all duration-300"
        >
          <div
            className="w-[55px] h-[55px] rounded-full flex items-center justify-center dark:[background:conic-gradient(#FFFF_var(--p),#021526_var(--p))] [background:conic-gradient(#000000_var(--p),#DDDDDD_var(--p))]"
            style={{
              "--p": `${scrollProgress}%`,
            }}
          >
            <div className="bg-white dark:bg-[#021526] rounded-full w-[85%] h-[85%] flex items-center justify-center text-2xl text-black dark:text-[#DDDDDD] shadow-lg">
              <TbArrowBigUpLinesFilled />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BackToTop;
