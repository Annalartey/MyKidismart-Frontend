import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import axios from 'axios'

function CardFlip5() {


    const[isFlipped, setIsFlipped]= useState(false)


    const[remark, setRemark] = useState([])


    const handleClick = ((event) => {
        axios.get("http://localhost:5000/remark").then(response => {
                setRemark(
                    response.data[1])},

        event.preventDefault(),
        setIsFlipped(!isFlipped)
      )
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
            <div className="border-2 p-2 mt-4 bg-black">
            <h1 className="text-3xl font-bold text-white text-center">{remark.remark}</h1>
            </div>
        </div>
    )
}

export default CardFlip5
