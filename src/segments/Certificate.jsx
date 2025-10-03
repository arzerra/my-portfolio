import {useState, React} from 'react';
import { MdKeyboardArrowLeft , MdKeyboardArrowRight  } from "react-icons/md";


function Certificate() {
  const [selectedImg, setSelectedImg] = useState(null);
  const certificate = [
    {
      img: "images/certificates/1.png",
      title: "Cybersecurity",
    },
    {
      img: "images/certificates/2.png",
      title: "HTML and CSS",
    },
    {
      img: "images/certificates/3.png",
      title: "Network Security",
    },
    {
      img: "images/certificates/4.png",
      title: "JavaScript",
    },
    {
      img: "images/certificates/5.png",
      title: "ReactJS",
    },
    {
      img: "images/certificates/6.jpg",
      title: "Certificate of Completion",
    },
  ];

  return (
    <div id="certificate" className="pt-10 sm:pt-20 pb-5">
      <div className="container px-5 sm:px-0 md:px-5">
        <div className="flex items-center justify-center w-full mt-5">
          <div className="flex-grow border-b border-gray-400 dark:border-gray-600"></div>
          <h1 className="px-4 text-2xl sm:text-4xl font-bold text-center dark:text-white">
            Certificates
          </h1>
          <div className="flex-grow border-b border-gray-400 dark:border-gray-600"></div>
        </div>

        {/* Carousel */}
        <div className="mt-10 pt-15 pb-2 flex overflow-x-auto snap-x snap-mandatory gap-6 custom-scrollbar">
          {certificate.map((cert, i) => (
            <div
              key={i}
              className="snap-center flex-none w-80 flex-col rounded-2xl bg-gradient-to-br from-white to-gray-50 text-gray-700 font-['Quicksand'] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-3 cursor-pointer"
              onClick={() => setSelectedImg(cert.img)}
            >
              <div className="relative mx-4 -mt-10 h-50 overflow-hidden rounded-2xl shadow-lg group">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="object-cover w-full h-full"
                />
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

      {/* Modal */}
      {selectedImg && (
        <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm bg-opacity-30 flex items-center justify-center z-50"
        onClick={() => setSelectedImg(null)}>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full px-2 py-1 shadow-lg"
              onClick={() => setSelectedImg(null)}
            >
              ✕
            </button>
            <img
              src={selectedImg}
              alt="Certificate"
              className="max-h-[80vh] max-w-[90vw] sm:max-h-[70vh] sm:max-w-[80vw] shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificate;
