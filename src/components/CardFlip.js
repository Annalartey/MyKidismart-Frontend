import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'

function CardFlip() {

    const[isFlipped, setIsFlipped]= useState(false)


    const handleClick = ((event) => {
        event.preventDefault()
        setIsFlipped(!isFlipped)
      })
  
     


    return (
        <div>
            <div className="w-full px-6">
            
            <ReactCardFlip  isFlipped={isFlipped} flipDirection="vertical"className="">
                <div onClick={handleClick} className="rounded h-56 w-56 mr-6 bg-blue-700 text-white text-4xl text-center ">
                    Question 1
                </div>
                
                <div onClick={handleClick} className="rounded h-56 w-56 mr-6 bg-blue-700 text-white">
                   Correct Answer
                </div>
                
            </ReactCardFlip>
            </div>
        </div>
    )
}

export default CardFlip
