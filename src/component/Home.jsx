import React from 'react'
import Navbar from './navbar/Navbar'
import { HeaderImage } from '../utils/constant'
import { Link } from 'react-router-dom'
import FeaturedBlogs from './FeaturedBlogs'

const Home = () => {
  return (
    <div>
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:p-20 p-10">
        <div className="textContainer text-center sm:text-left sm:w-[50%]">
            <h1 className="text-5xl font-bold mb-2">Read at your <span className="text-orange-600">Ease</span></h1>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, aliquam?
            </p>
            <button className="py-3 px-10 bg-orange-600 rounded text-white font-semibold text-sm-xl my-3">
                <Link to="/blog">Read</Link>
            </button>
        </div>
        <div className="imageContainer sm:w-[50%] ">
            <img src={HeaderImage}
                className="w-72 float-right"
            alt="" />

        </div>
        
    </div>
    <hr className="bg-gray-900 h-[2px] w-[90%] m-auto" />
    <FeaturedBlogs />
    </div>
  )
}

export default Home