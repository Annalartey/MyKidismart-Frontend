import React, {useState} from 'react'
import ReactCardFlip from 'react-card-flip'
import axios from 'axios'

function CardFlip() {

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
                <div onClick={handleClick} className="rounded h-56 w-56 mr-6 bg-black text-white text-4xl text-center ">
                    ME?
                </div>
                
                <div onClick={handleClick} className="rounded h-56 w-56 mr-6 bg-black text-white">
                   NO... <br></br>
                   <span>I am BLACK</span>
                </div>
                
            </ReactCardFlip>
            <div className="border-2 p-2 mt-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center">{remark.remark}</h1>
            </div>
            </div>
        </div>
    )
}

export default CardFlip
