import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import { CgMail } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
import { CiLocationOn, CiPhone  } from "react-icons/ci";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaJava, FaPython, FaLaravel  } from "react-icons/fa";
import { FaGitAlt, FaFlutter } from "react-icons/fa6";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMysql, SiCplusplus, SiTensorflow, SiFirebase   } from "react-icons/si";


function About() {

    const images = [
      {light: "images/grad.jpg", dark: "images/grad.jpg"},
      {light: "gif/1.gif", dark: "images/glow2.png"}
    ];
    const [activeTab, setActiveTab] = useState("Contact");
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images.length]);

    const techs = [
      { icon: <FaHtml5 className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <FaCss3Alt className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <FaBootstrap className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <FaJsSquare className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <BiLogoTypescript className="w-11 h-11 sm:w-[65px] sm:h-[65px]" /> },
      { icon: <FaReact className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <FaNodeJs className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <SiMysql className="w-11 h-11 sm:w-[65px] sm:h-[65px]" /> },
      { icon: <FaJava className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <FaPython className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <FaFlutter className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <SiCplusplus className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <FaGitAlt className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <FaLaravel className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <SiTensorflow  className="w-10 h-10 sm:w-16 sm:h-16" /> },
      { icon: <SiFirebase  className="w-10 h-10 sm:w-16 sm:h-16" /> },
    ];

  return (
    <>
      <div id="about" className="pt-20">
        <div className='container  pt-10 px-5 sm:px-0 md:px-5'>
          <div className="flex flex-col sm:flex-row">
            {/* Left */}
            <div className='flex flex-1 items-center justify-center sm:justify-start' data-aos="fade-right">
                <img src="gif/1.gif" alt="Light Logo" className="w-70 sm:w-100 dark:hidden transition-opacity duration-700 rounded-4xl" />
                <img src="images/glow2.png" alt="Dark Logo" className="w-70 sm:w-100 hidden dark:block transition-opacity duration-700 rounded-4xl" />
            </div>
            {/* Right */}
            <div className="flex flex-1 flex-col items-center justify-center mt-5 sm:mt-0 dark:text-white space-y-5">
              <div className="flex justify-center items-center w-full">
                <div className="flex-grow border-b border-gray-400 dark:border-gray-600"></div>
                <h1 className='px-4 text-center font-bold text-2xl sm:text-4xl'>About Me</h1>
                <div className="flex-grow border-b border-gray-400 dark:border-gray-600"></div>
              </div>
              <div className="flex flex-col text-center justify-start items-start">
                <div className="flex justify-center items-center mt-5">
                  <h1 className="text-justify sm:text-justify indent-5">
                    I'm Ian Clark Cañete, graduated Bachelor of Science in Information Technology from the University of Mindanao. 
                    I thrive on the excitement of continuous learning and enjoy tackling new challenges. 
                    I also have experience working as a customer service representative, which has helped me develop strong communication skills.
                  </h1>
                </div>

                <ul className="flex flex-row gap-5 sm:gap-10 mt-6 text-md text-center justify-center items-center">
                  {["Contact", "Soft Skills", "Hobbies", "Language"].map((tab) => (
                    <li
                      key={tab}
                      className={`cursor-pointer pb-1 transition-colors font-semibold 
                        ${activeTab === tab 
                          ? "border-b-2 border-black dark:border-white text-black dark:text-white" 
                          : "text-gray-500 hover:text-black dark:hover:text-white"}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-start justify-start min-h-[250px] sm:min-h-[300px]">
                  {activeTab === "Contact" && (
                    <ul className="list-none border-l-2 border-gray-500 pl-5 space-y-5">
                      <li className="flex items-center gap-4"><CgMail size={20}/> <span>ianclrk.canete@gmail.com</span></li>
                      <li className="flex items-center gap-4"><CgMail size={20}/> <span>i.canete.524581@umindanao.edu.ph</span></li>
                      <li className="flex items-center gap-4"><CiPhone  size={20}/> <span>09912174478 / 09288265266</span></li>
                      <li className="flex items-center gap-4"><CiLocationOn size={20}/> <span>Catalunan Grande, Davao City, Philippines</span></li>
                      <li className="flex items-center gap-4"><FiGithub size={20}/> <span>github.com/arzerra</span></li>
                      </ul>
                  )}
                  {activeTab === "Soft Skills" && (
                    <>
                    <ul className="list-none border-l-2 border-gray-500 pl-5 space-y-5">
                      <li className="flex items-center gap-4">• <span>Communication Skills</span></li>
                      <li className="flex items-center gap-4">• <span>Critical Thinking</span></li>
                      <li className="flex items-center gap-4">• <span>Adaptability</span></li>
                      <li className="flex items-center gap-4">• <span>Teamwork</span></li>
                      <li className="flex items-center gap-4">• <span>Time Management</span></li>
                      <li className="flex items-center gap-4">• <span>Customer Service</span></li>
                    </ul>
                    </>
                  )}
                  {activeTab === "Hobbies" && (
                    <>
                    <ul className="list-none border-l-2 border-gray-500 pl-5 space-y-5">
                      <li className="flex items-center gap-4">• <span>Coding</span></li>
                      <li className="flex items-center gap-4">• <span>Cooking</span></li>
                      <li className="flex items-center gap-4">• <span>Reading Manhwa</span></li>
                      <li className="flex items-center gap-4">• <span>Watching Anime</span></li>
                      <li className="flex items-center gap-4">• <span>Basket Ball</span></li>
                    </ul>
                    </>
                  )}
                  {activeTab === "Language" && (
                    <>
                    <ul className="list-none border-l-2 border-gray-500 pl-5 space-y-5">
                      <li className="flex items-center gap-4">• <span>English</span></li>
                      <li className="flex items-center gap-4">• <span>Tagalog</span></li>
                      <li className="flex items-center gap-4">• <span>Bisaya</span></li>
                    </ul>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          {/* <div className="flex flex-col items-center justify-center mt-10 dark:text-white mt-0 sm:mt-10">
            <div>
              <h1 className="text-4xl">EDUCATION</h1>
            </div>

            <div className="w-full border-1 dark:border-[#F9F3F3] shadow-xl rounded-2xl mt-5">

              <div className="flex flex-col items-center justify-center m-5">
                <h1 className="text-xl sm:text-4xl">Univesity of Mindanao</h1>
                <h1 className="text-md sm:text-2xl">Bachelor of Science in Information Technology</h1>
                <h1 className="text-sm sm:text-xl">College of Computing Education (CCE)</h1>
              </div>
              <div className="flex flex-row items-center justify-center ">
                <div className="border-r-1 w-full px-5">
                  <div className="flex items-center justify-center">
                    <h1>Capstone</h1>
                  </div>
                </div>
                <div className="border-l-1 w-full px-5">

                </div>
              </div>
            </div>
          </div> */}

          {/* Tech Stack */}
            <div className="flex items-center justify-center w-full my-5 sm:my-10">
              <div className="flex-grow border-b border-gray-400 dark:border-gray-600"></div>
              <h1 className="px-4 text-2xl sm:text-4xl font-bold text-center dark:text-white">
                Tech Stack
              </h1>
              <div className="flex-grow border-b border-gray-400 dark:border-gray-600"></div>
            </div>
            <div className="w-full overflow-hidden bg-transparent py-5 mt-5">
              <div className="relative flex w-full overflow-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                  {techs.map((t, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center justify-center mx-10 text-black dark:text-white"
                    >
                      {t.icon}
                      <span className="mt-2 text-lg">{t.name}</span>
                    </div>
                  ))}
                  {techs.map((t, i) => (
                    <div
                      key={i + "-copy"}
                      className="flex flex-col items-center justify-center mx-10 text-black dark:text-white"
                    >
                      {t.icon}
                      <span className="mt-2 text-lg">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

        </div>
      </div>
    </>
  )
}

export default About