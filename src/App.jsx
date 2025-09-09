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
    <div className='h-full w-full bg-gray-100 dark:bg-[#021526]'>
    <Header/>
    <Hero/>
    </div>
    </>
  )
}

export default App
