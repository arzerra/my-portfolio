import {React, useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import MatrixBackground from './components/MatrixBackground.jsx'



function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,  
    });
  }, []);

  return (
    <>
    <div className='h-screen w-full bg-gray-100 dark:bg-[#021526] dark:[background-image:radial-gradient(rgba(255,255,255,0.171)_2px,transparent_0)]
  dark:[background-size:30px_30px] 
  dark:[background-position:-5px_-5px]'>
    <Header/>
    <Hero/>
    </div>
    </>
  )
}

export default App
