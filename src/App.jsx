import {React, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/Header.jsx'
import Fonts from './components/Fonts.jsx'
import Hero from './segments/Hero.jsx'
import About from './segments/About.jsx'
import Experience from './segments/Experience.jsx'
import Project from './segments/Project.jsx'
import Certificate from './segments/Certificate.jsx'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,  
    });
  }, []);

  return (
    <div className='h-full w-full bg-[#DDDDDD] dark:bg-gradient-to-r dark:from-[#0A2647] dark:to-[#021526]'>
      <Router>
        <Header/>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero/>
                <About/>
                <Experience/>
                <Project/>
                <Certificate/>
              </>
            } 
          />
          <Route path="/fonts" element={<Fonts/>} />
          <Route path="*" element={<h1 className="text-center text-2xl">404 - Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
