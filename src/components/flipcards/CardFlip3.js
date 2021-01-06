import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'

function CardFlip3() {


    const[isFlipped, setIsFlipped]= useState(false)


    const handleClick = ((event) => {
        event.preventDefault()
        setIsFlipped(!isFlipped)
      })
  

    return (
        <div>
            <div className="w-full">
            
            <ReactCardFlip  isFlipped={isFlipped} flipDirection="vertical"className="">
                <div onClick={handleClick} className="rounded h-56 w-56 mr-6 bg-yellow-300 text-white text-4xl text-center ">
                    ME?
                </div>
                
                <div onClick={handleClick} className="rounded h-56 w-56 mr-6 bg-yellow-300 text-white">
                NO... <br></br>
                   <span>I am YELLOW</span>
                </div>
                
            </ReactCardFlip>
            </div>
        </div>
    )
}

export default CardFlip3
