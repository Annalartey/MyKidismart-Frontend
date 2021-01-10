import React, {useState, useEffect} from 'react'
import axios from 'axios'
import imgCartoon from './../images/cartoon.jpg'

function LearnContent() {

    const [kidsdata, setKidsdata] = useState({})


    useEffect(() => {
      axios.get('http://localhost:5000/kids')
      .then((res) => {
          console.log(res.data[1]);
          setKidsdata(res.data[1]);
  
      })
      .catch(err => console.error(err))
  },
  []);


    return (
        <div className="bg-center bg-cover h-96 text-white text-xl font-bold pl-40 pt-8 " style={{backgroundImage: `url(${imgCartoon})`}}>
            <h1 className="mb-20">Welcome Love Lartey {kidsdata.firstname} {kidsdata.lastname}</h1>
            <a href="/questionpage" className="border-2 border-white px-4 py-2">Start</a>
        </div>
    )
}

export default LearnContent
