import React, {useState} from 'react'
import axios from 'axios'
import CardFlip from './flipcards/CardFlip'
import CardFlip1 from './flipcards/CardFlip1'
import CardFlip2 from './flipcards/CardFlip2'
import CardFlip3 from './flipcards/CardFlip3'
import CardFlip4 from './flipcards/CardFlip4'
import CardFlip5 from './flipcards/CardFlip5'


function QuestionsPage() {

            const[question, setQuestion] = useState([])
    const handleButtonClick = () => {


            axios.get("http://localhost:5000/question").then(response => {
                setQuestion(
                    response.data[2]
                )
            })
    
        }

    return (
        <div className="text-center text-3xl text-gray-700">
            <h1>WELCOME</h1>
            <p>This is your first question</p>
            <button className="rounded bg-gray-200 px-4 border-2 text-lg" onClick={handleButtonClick}>Go</button>
           <h1 className="text-center font bold text-4xl text-red-700 my-10 animate-pulse">{question.question}</h1> 
            <div className="flex mx-56 pl-20">
                <CardFlip/>
                <CardFlip1/>
                <CardFlip2/>
            </div>
            <div className="flex mt-10 mx-56 pl-20">
                <CardFlip3/>
                <CardFlip4/>
                <CardFlip5/>
           </div>

           <a href="/questionpage1" className="rounded bg-gray-200 px-4 mt-20 border-2 text-lg" onClick={handleButtonClick}>Next</a>
    
        </div>
    )
}

export default QuestionsPage
