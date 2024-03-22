import React from 'react'
import Navbar from './navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Footer from './Footer';
import Blog from './blogs/Blog';

const Body = () => {

  return (
    <BrowserRouter>
    <div className="flex flex-col justify-between h-[100vh]">
        <Navbar/>
        <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/contact" element={<Contact/>} />
            <Route  path="/blog" element = {<Blog/>}/>
        </Routes>
        <Footer/>
        </div>
    </BrowserRouter>
  )
}

export default Body