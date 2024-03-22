import React from 'react'
import {Link} from "react-router-dom"


const NavLinks = () => {

    const navLinks = [
        {
            title : "Home",
            path : "/",
        },
        {
            title : "Blog",
            path : "/blog"
        },
        {
            title : "About",
            path : "/about",
        },
        {
            title : "Contact",
            path : "/contact",
        },
        
    ]

  return (
    <div className="navOptions flex items-center justify-center gap-8 text-sm-xl font-semibold cursor-pointer">
        {
            navLinks.map((link) => (
                <Link to={link.path}>{link.title}</Link>
            ))
        }
    </div>
  )
}

export default NavLinks