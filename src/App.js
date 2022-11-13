import React,{useState} from 'react'
import './App.css';
import Container from './Components/Container';
import About from './Pages/about'
import ContactUs from './Pages/ContactUs';
import {Link, Route,Routes,useLocation} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Work from './Pages/work'
import {AnimatePresence} from 'framer-motion'
function App() {
  const location = useLocation()
  return (
  
   <div>
    <Navbar/>
    <AnimatePresence mode='wait'>
   <Routes location={location} key= {location.pathname}>
    <Route  path='/' exact element={<About/>}/>
    <Route  path='/work' element={<Work/>}/>
    <Route path='/contact' element={<ContactUs/>}/>
   </Routes>
   </AnimatePresence>
   </div>
  
  )
}

export default App;
