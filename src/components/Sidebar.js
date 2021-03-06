import React, {useState, useEffect} from 'react'
// import logo from './../img/logo.png'
import axios from 'axios'
// import ChildComponent from './ChildComponent';

function Sidebar () {

  const [kids, setKids] = useState([]);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [dateofbirth, setDateofBirth] = useState('');
  

  const handleNameInput = (event) => {
    setFirstName(event.target.value)
  };

  const handleParentNameInput = (event) => {
    setLastName(event.target.value)
  };

  const handleDateofBirthInput = (event) => {
    setDateofBirth(event.target.value)
  };

  const [kidsdata, setKidsdata] = useState({})


  useEffect(() => {
    refreshKids()
  }, []);

  function refreshKids () {
    let token = localStorage.getItem('authorisation_token');
    console.log(token)

    axios.get(
      'http://localhost:5000/kids', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        if (res.status !== 200) {
          alert("Fetching kids failed!")
          return
        }

        console.log(res.data);
        setKids(res.data)
        if (res.data.length > 0) {
          setKidsdata(res.data[0]);
        }

      })
      .catch(err => console.error(err))
  }



  //   useEffect = (() =>{
  //   axios.get("http://localhost:5000/kids")
  //   .then((res) =>{
  //     console.log(res.data);
  //     setKidsdata(res.data);
  //   })
  //   .catch(err => console.error(err))
  // })

  function handleAddkid(event) {
    event.preventDefault();
    // Fetch token
    let token = localStorage.getItem('authorisation_token');
    const newKid = {
      firstname: firstname,
      lastname: lastname,
      dateofbirth: dateofbirth,
    }
    //  console.log({name,email,password})
     axios.post("http://localhost:5000/kids", newKid, {
       headers: {
         'Authorization': `Bearer ${token}`
        }
      })
        .then(res => {
          setFirstName("")
          setLastName("")
          setDateofBirth("")
          console.log("Added successfully")
          refreshKids()
        })
        .catch(err => {
          console.log(err)
        })
    }


  function handleRemovekid(event) {
    event.preventDefault();


  }

  return (
    <div className="w-64 bg-gray-100 border-r border-gray-200 px-6 py-6 overflow-y-auto">

      <nav className="mt-4 ">
        <h3 className="text-3xl text-gray-600 font-bold uppercase tracking-wide">Kids</h3>
        {
          kids.length < 1 ? 
            <div className="mt-2 -mx-3 text-lg ml-2">
              No Kids
            </div>
          :
            kids.map((kid) => {
              return (
                <div className="mt-2 -mx-3 text-lg text-blue-500 hover:text-blue-900 ml-2">
                   {/* <ChildComponent name={name}/>  */}
                  {kid.firstname} {kid.lastname}
                </div>
              )
            })
        }


        <h3 className="text-xl text-gray-600 font-medium uppercase tracking-wide mt-24">Add a new Kid</h3>
        <input className="w-full rounded-lg mt-4 h-8" type="text" value={firstname} onChange={handleNameInput}
          placeholder="First Name"></input>
        <input className="w-full rounded-lg mt-4 h-8" type="text" value={lastname} onChange={handleParentNameInput}
          placeholder="Last Name"></input>
        <input className="w-full rounded-lg mt-4 h-8" type="date" value={dateofbirth} onChange={handleDateofBirthInput}
          placeholder="Date of Birth"></input>
        

        
        <button onClick={handleAddkid}
          className="w-full rounded-lg mt-4 px-4 py-3 flex justify-start text-xs text-white font-semibold uppercase tracking-wide bg-blue-900 hover:bg-blue-800">
          <span>
            <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </span>
          <span className="pl-2 w-full">New Kid</span>
        </button>
        
        


        <button onClick={handleRemovekid}
          className="w-full rounded-lg mt-12 px-4 py-3 flex justify-start text-xs text-white font-semibold uppercase tracking-wide bg-red-700 hover:bg-red-800">
          <span className="pl-2 w-full">Remove Kid</span>
        </button>
      </nav>
    </div>
  )
}

export default Sidebar