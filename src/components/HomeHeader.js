import React from 'react'

import imgEight from './../images/eight.jpg'
// import logo from './../images/logo.png'

const HomeHeader = () => {
  return (
    <header className="bg-center bg-cover" style={{backgroundImage: `url(${imgEight})`}}>
      <div className="h-screen flex flex-col justify-start px-12 py-8">
        <div className="flex flex-col lg:flex-row w-full lg:justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          <a href="index.html" className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-center lg:justify-start items-center space-y-3 lg:space-y-0 space-x-0 lg:space-x-3 ">
            {/* <img className="h-20 w-20" src={logo} alt="ETRC Logo" /> */}
            <h1 className="text-white">
              <span className="block text-xl font-semibold">MyKidismart</span>
              <span className="block text-lg">Let's Learn With Fun </span>
            </h1>
          </a>
          <div className="w-full lg:w-1/2 justify-center lg:justify-end lg:text-right py-2 flex space-x-6 text-lg">
            <a href="/home" className=" py-1 text-white font-semibold border-b-2 hover:border-green-400 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110 ">Home</a>
            <a href="#about" className=" py-1 text-white font-semibold border-b-2 hover:border-green-400 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110 ">About</a>
            <a href="#subjects" className=" py-1 text-white font-semibold border-b-2 hover:border-green-400 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">Subjects</a>
            <a href="#videos" className=" py-1 text-white font-semibold border-b-2 hover:border-green-400 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">Videos</a>
            <a href="/signup" className=" py-1 text-white font-semibold border-b-2 hover:border-green-400 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">Signup</a>
            <a href="/login" className=" py-1 text-white font-semibold border-b-2 hover:border-green-400 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">Login</a>
          </div>
        </div>
        <div className="text-center my-40 lg:my-56">
          <h1 className="text-6xl font-bold text-gray-700 mb-20">Fun Learning For Kids</h1>
          <a href="/signup" className="border-2 border-green-400 px-2">Join For Free</a>
        </div>
        <div className="text-center">
          {/* <a href="#our-services" className="inline-block px-8 py-4 bg-gray-300 hover:bg-gray-800 text-black hover:text-white rounded-md">
            Worship With Us
          </a>
          <div className="mt-8">
            <button className="text-sm text-white border-b-2 hover:border-green-400 transition duration-500 ease-in-out hover:border-b-2 transform hover:-translate-y-1 hover:scale-110">I'M NEW HERE</button>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default HomeHeader