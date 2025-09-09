import {React, useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './components/Header.jsx'



function App() {
  return (
    <>
    <div className='h-screen w-full bg-gray-100 dark:bg-black'>
    <Header/>

    </div>
    </>
  )
}

export default App
