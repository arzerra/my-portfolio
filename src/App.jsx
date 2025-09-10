import {React, useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Toggle from './components/Toggle.jsx'
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
    <div className='h-full w-full bg-gray-100 dark:bg-[#021526]   dark:[background-image:radial-gradient(rgba(255,255,255,0.171)_2px,transparent_0)]
    dark:[background-size:30px_30px] 
    dark:[background-position:-5px_-5px]'>
    <Header/>

    <div className='fixed top-0 right-2 sm:right-10 mt-30 z-50'>
      <Toggle/>
    </div>
    <Hero/>
    <About/>
    </div>
    </>
  )
}

export default App
