import React, { useState } from 'react'
import NavLinks from "./NavLinks"
import "./navbar.css"

const Navbar = () => {

  const [mobileNav , setMobileNav] = useState(false);

  return (
    <div className="flex items-center justify-between w-full"> 
      <div className="container flex justify-between sm:px-20 px-10 py-10">
        <h1 className="font-bold text-3xl">LOGO</h1>
        <div className="desktopNavbar">
        <NavLinks />
        </div>
      </div>
      <button className="toggleNavBtn bg-orange-600 py-2 px-5 text-white font-semibold" 
        onClick={() => setMobileNav(prev => !prev)}
      >
          =
      </button>
      <div className="mobileNavOptions">
        {
          mobileNav && 
          <NavLinks/>
        }

      </div>
    </div>
  )
}

export default Navbar