import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'

function CardFlip5() {


    const[isFlipped, setIsFlipped]= useState(false)


    const handleClick = ((event) => {
        event.preventDefault()
        setIsFlipped(!isFlipped)
      })
  

    return (
        <div>
            <div className="w-full">
            
            <ReactCardFlip  isFlipped={isFlipped} flipDirection="vertical"className="">
                <div onClick={handleClick} className="rounded h-56 w-56 mr-4 bg-white border-2 text-black text-4xl text-center ">
                    ME?
                </div>
                
                <div onClick={handleClick} className="rounded h-56 w-56 mr-4 bg-white border-2 text-black">
                NO... <br></br>
                   <span>I am WHITE</span>
                </div>
                
            </ReactCardFlip>
            </div>
        </div>
    )
}

export default CardFlip5
