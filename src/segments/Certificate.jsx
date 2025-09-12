import React from 'react';
import { MdKeyboardArrowLeft , MdKeyboardArrowRight  } from "react-icons/md";


function Certificate() {
  const certificate = [
    {
      img: "images/certificates/1.png",
      title: "Cybersecurity",
      desc: "An LMS intended to minimize cheating behaviors for online assessments and provides a mechanism to detect and store cheating behavior with face and object detection.",
    },
    {
      img: "images/certificates/2.png",
      title: "HTML and CSS",
      desc: "A functional website with a sole purpose to provide a convenient way for visitors in Davao City to browse, compare, and rent cars for personal or business use.",
    },
    {
      img: "images/certificates/3.png",
      title: "Network Security",
      desc: "Developed the school’s official website with responsive UI, intuitive navigation, and content management for announcements, programs, and enrollment.",
    },
    {
      img: "images/certificates/4.png",
      title: "JavaScript",
      desc: "A fullstack MERN app with authentication and dashboards.",
    },
    {
      img: "images/certificates/5.png",
      title: "ReactJS",
      desc: "A fullstack MERN app with authentication and dashboards.",
    },
  ];

  return (
    <div id="certificate" className="py-10 sm:py-10">
      <div className="container px-5 sm:px-0 md:px-5">
        <div className="dark:text-white flex flex-col justify-center items-center">
          <h1 className="font-bold text-4xl">Certificates</h1>
        </div>

        {/* Carousel */}
        <div className="mt-10 pt-15 pb-2 flex overflow-x-auto snap-x snap-mandatory gap-6 custom-scrollbar">
          {certificate.map((cert, i) => (
            <div
              key={i}
              className="snap-center flex-none w-80 flex-col rounded-2xl bg-gradient-to-br from-white to-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-3"
            >
              <div className="relative mx-4 -mt-10 h-50 overflow-hidden rounded-2xl shadow-lg group">
                <img src={cert.img} alt={cert.title} className="object-cover w-full h-full" />
              </div>
              <div className="p-3">
                <h5 className="mb-2 text-xl text-center font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificate;
