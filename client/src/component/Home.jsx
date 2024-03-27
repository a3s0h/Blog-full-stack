import React, { useEffect } from 'react'
import Navbar from './navbar/Navbar'
import { HeaderImage } from '../utils/constant'
import { Link } from 'react-router-dom'
import FeaturedBlogs from './FeaturedBlogs'
import AOS from "aos"
import 'aos/dist/aos.css'
import manBg from "../../public/manBg.svg"


const Home = () => {

    useEffect(()=>{
        AOS.init({duration : 2000});
    },[])

  return (
    <div>
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:p-20 p-10">
        <div className="textContainer text-center sm:text-left sm:w-[50%] py-[7rem]" data-aos="fade-right">
            <h1 className="text-5xl font-bold mb-2">Read at your <span className="text-orange-600">Ease</span></h1>
            <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, aliquam?
            </p>
            <button className="py-3 px-10 bg-orange-600 rounded text-white font-semibold text-sm-xl my-3">
                <Link to="/blog">Read</Link>
            </button>
        </div>
        <div className="imageContainer sm:w-[50%] " data-aos="fade-left">
            <img src={manBg}
                className="w-full float-right"
            alt="" />
{/* <iframe src="https://lottie.host/embed/607cf4f1-6401-4525-b24e-ccbca4366862/BjOcAUWqBR.json" className="w-full "></iframe> */}
        </div>
        
    </div>
    <hr className="bg-gray-900 h-[2px] w-[90%] m-auto" />
    <FeaturedBlogs />
    </div>
  )
}

export default Home