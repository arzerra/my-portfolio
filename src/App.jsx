import {React, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Toggle from './components/Toggle.jsx'
import Fonts from './components/Fonts.jsx'
import MatrixBackground from './components/MatrixBackground.jsx'

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
