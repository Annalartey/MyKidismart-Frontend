import React from 'react'
import two from '../images/two.jpg'
import five from '../images/five.jpg'
import seven from '../images/seven.jpg'

function HomeAbout() {
    return (
        <div>
            <div>
                <div className="mt-14 text-center text-gray-700 text-lg mb-4 lg:mx-96">
                    <h1 className="text-3xl" >Who We Are</h1>
                    <hr></hr>
                    <p>We are a group of techies that are passionate about kids</p>
                </div>
                <div className="mt-14 text-center text-gray-700 text-lg mb-4 lg:mx-56">
                    <h1 className="text-3xl">What We Do</h1>
                    <hr></hr>
                    <p>Its simple... We help kid learn through practice and fun. We help you know what your kids know and what should be improved on by more practice and more fun. You see learning, we see fun. </p>
                </div>
            </div>
            <h1 className="my-14 text-center text-gray-800 text-4xl">Fun Things About Us</h1>
            <div className="lg:flex w-full lg:px-20 pb-20 ">
                <div className="border-2 border-red-100 lg:w-1/3">
                    <img className="h-56 w-full object-cover" src={two} alt="two"/>
                    <h1 className="text-lg font-bold text-gray-700 my-6">Fun Questions</h1>
                    <p>We give your kids simple and fun questions so the take the test having lots and lots of fun.</p>
                    <button>See Sample Questions</button>
                </div>
                <div className="border-2 border-red-100 lg:w-1/3 lg:mx-8">
                     <img className="h-56 w-full object-cover" src={five} alt="five"/>
                    <h1 className="text-lg font-bold text-gray-700 my-6">GES New Curriculum</h1>
                    <p>Oue questions are deesigned to meet the standard of the new Ges curriculum for kids.</p>
                    <button>Learn More</button>
                </div>
                <div className="border-2 border-red-100 lg:w-1/3">
                     <img className="h-56 w-full object-cover" src={seven} alt="seven"/>
                    <h1 className="text-lg font-bold text-gray-700 my-6">Testimonies</h1>
                    <p>The testimonies of benefitted parents are just so awesome. Join the Family today</p>
                    <button>Join Us For Free</button>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout

