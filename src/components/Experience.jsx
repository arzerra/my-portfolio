import React from 'react'
import { useState, useEffect } from "react";
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
    images: [
      "images/remotask/1.jpg",
      "images/remotask/2.jpg",
      "images/remotask/3.jpg",
    ],
  },
  {
    year: "2023 - 2024",
    company: "VXI Global Solutions",
    role: "Customer Service Representative - Voice",
    details:
      "A technical support representative, where I played a key role in providing exceptional customer service and technical assistance to a diverse clientele.",
    images: [
        "images/vxi/1.jpg",
      "images/vxi/2.jpg",
      "images/vxi/3.jpg",
    ],
  },
  {
    year: "2024 - 2025",
    company: "AwesomeCX - Transcom",
    role: "Customer Service Representative - Email",
    details:
      "Provided multi-channel support via email, chat, SMS, and phone, specializing in communication between customers and veterinarians.",
    images: [
              "images/awesomecx/1.jpg",
      "images/awesomecx/2.jpg",
      "images/awesomecx/3.jpg",
      "images/awesomecx/4.jpg",
    ],
  },
  {
    year: "2025",
    company: "Advance Infinit Solution Inc.",
    role: "Internship",
    details:
      "Developed a clean, user-friendly platform reflecting the clinic’s commitment to exceptional dental care while making it easier for patients to book online.",
    images: [
        "images/infinit/1.jpg",
        "images/infinit/2.jpg",
        "images/infinit/3.jpg",
        "images/infinit/4.jpg",
        "images/infinit/5.jpg",
    ],
  },
];


  return (
    <>
      <div id="experience" className='py-20'>
        <div className='container pt-10 sm:px-0 md:px-5'>
            <div className='border dark:text-white dark:border-white shadow-xl rounded-xl pt-5'>
                <div className='flex items-center justify-center'>
                <h1 className=' text-2xl sm:text-4xl'>Experience</h1>
                </div>
                <div className='border-l-3 mx-10 my-10'>
                    <div className="mx-5 my-10 space-y-5">
                        {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="border-b-1 px-10 pb-4 cursor-pointer"
                            onClick={() => toggleAccordion(index)}
                        >
                            {/* Header row */}
                            <div className="flex items-start gap-6 w-full">
                            {/* Bullet */}
                            <div>•</div>

                            {/* Year */}
                            <div className="w-28 font-semibold">{exp.year}</div>

                            {/* Company + Role (stacked) */}
                            <div className="flex-1">
                                <h1 className="font-bold">{exp.company}</h1>
                                <h2 className="italic">{exp.role}</h2>

                                {/* Details (only under company/role) */}
                                {openIndex === index && (
                                <div className="mt-2">
                                    <p className="text-gray-600 dark:text-gray-300 text-justify">
                                    {exp.details}
                                    </p>

                                    {/* Render images if available */}
                                    {exp.images && exp.images.length > 0 && (
                                    <div className="mt-3 flex flex-wrap gap-3">
                                        {exp.images.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`${exp.company} ${i + 1}`}
                                            className="w-auto h-32 rounded-lg shadow-md"
                                        />
                                        ))}
                                    </div>
                                    )}
                                </div>
                                )}
                            </div>

                            {/* Arrow aligned right */}
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
      </div>
    </>
  )
}

export default Experience
