import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function Experience() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const experiences = [
    {
      year: "2020 - 2021",
      company: "REMOTASK",
      role: "Data Labelling / Data Annotator",
      details:
        "Responsible for the accurate labeling and tagging of images using both 2D imagery and 3D applications.",
      images: ["images/remotask/1.png", "images/remotask/2.jpeg", "images/remotask/3.png"],
    },
    {
      year: "2023 - 2024",
      company: "VXI Global Solutions",
      role: "Customer Service Representative - Voice",
      details:
        "A technical support representative, where I played a key role in providing exceptional customer service and technical assistance to a diverse clients.",
      images: ["images/vxi/1.png", "images/vxi/2.jpg", "images/vxi/3.jpg"],
    },
    {
      year: "2024 - 2025",
      company: "AwesomeCX - Transcom",
      role: "Customer Service Representative - Email",
      details:
        "Provided multi-channel support via email, chat, SMS, and phone, specializing in communication between customers and veterinarians.",
      images: [
        "images/awesomecx/1.png",
        "images/awesomecx/3.jpg",
        "images/awesomecx/1.jpg",
        "images/awesomecx/2.jpg",
      ],
    },
    {
      year: "2025",
      company: "Advance Infinit Solution Inc.",
      role: "Internship",
      details:
        "Contributed to the development of school websites, Learning Management Systems (LMS), and Student Information Management Systems (SIMS).",
      images: [
        "images/infinit/1.png",
        "images/infinit/3.jpg",
        "images/infinit/2.jpg",
        "images/infinit/6.jpg",
      ],
    },
  ];

  return (
    <div id="experience" className="pt-10 sm:pt-25">
      <div className="container px-5 sm:px-0 md:px-5">
        <div className="dark:text-white pt-5">
          <div className="flex items-center justify-start">
            <h1 className="font-bold text-2xl sm:text-4xl ml-5 pr-5">Experience</h1>
            <div className="flex-grow border-b border-gray-400 dark:border-gray-600 mr-5"></div>
          </div>

          {/* Timeline container */}
          <div className="relative border-l-2 border-gray-300 dark:border-gray-600 mx-5 mt-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-10 pb-15 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-2 w-6 h-6 bg-gray-500 rounded-full border-4 border-white dark:border-white shadow-md"></div>

                {/* Row */}
                <div className="flex items-start gap-6">
                  <div className="w-28 font-semibold">{exp.year}</div>
                  <div className="flex-1">
                    <h1 className="font-bold">{exp.company}</h1>
                    <h2 className="italic">{exp.role}</h2>

                    {openIndex === index && (
                      <div className="mt-2">
                        <p className="text-gray-600 dark:text-gray-300 text-justify">
                          {exp.details}
                        </p>
                        {exp.images && exp.images.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-3 justify-center sm:justify-start">
                            {exp.images.map((img, i) => (
                              <img
                                key={i}
                                src={img}
                                alt={`${exp.company} ${i + 1}`}
                                className="w-auto h-32 rounded-lg shadow-md transform transition duration-300 hover:scale-150 hover:shadow-xl"
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Arrow */}
                  <div className="ml-auto flex items-center">
                    <IoIosArrowDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
