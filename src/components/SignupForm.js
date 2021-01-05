import React, { useState } from 'react';
import axios from 'axios'
import imgNine from './../images/nine.jpg'
import LearnPage from './LearnPage.js';


function SignupForm() {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('')
  const [SignedUp, setSignedUp ] = useState(false);

      
  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value)
  };

    const handleLastNameInput = (event) => {
        setLastName(event.target.value)
      };

      const handleEmailInput = (event) => {
        setEmail(event.target.value)
      };

      const handlePasswordInput = (event) => {
        setPassword(event.target.value)
      };

      const handleConfirmPasswordInput = (event) => {
        setConfirmPassword(event.target.value)
      };



    function handleSignedUp(event) {
      event.preventDefault();
      const newUser ={
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confirmpassword: confirmpassword
      }
      //  console.log({firstname,lastname,email,password,confirmpassword})
       axios.post("http://localhost:5000/user/signup", newUser).then(response => {
          setSignedUp(true)
          alert("Welcome to the family")
     })

    .then (res =>{
      res.status(201).send(res);
  })
  .catch(err =>{
      console.log(err)
  })
        
      }
  

    function handleLogout(event){
      event.preventDefault();
      setSignedUp(false)
    }


    return (
        <div className="bg-center bg-cover bg-gray-200" style={{backgroundImage: `url(${imgNine})`}}>

            {
                SignedUp
                    ?
                    <>
                        <LearnPage />
                        <button className="border-2 border-green-400 mt-10 px-2" onClick={handleLogout}>Logout</button>

                    </>
                    :
                    <>

                        <form className="shadow-xl mx-4 px-4 py-6 lg:mx-96 lg:px-6 lg:py-6 bg-transperent">

                            <label className="text-lg block font-bold  pb-2 mt-8">Firstname:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 mt-2" type="text" name='firstname' value={firstname} onChange={handleFirstNameInput}/>
                            <br></br>
                            
                            <label className="text-lg block font-bold  pb-2 mt-8">Lastname:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 mt-2" type="text" name='lastname' value={lastname} onChange={handleLastNameInput}/>
                            <br></br>

                            <label className="text-lg block font-bold  pb-2 mt-8">Email Adress:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 mt-2" type="email" name='email' value={email} onChange={ (event) => handleEmailInput(event) }/>
                            <br></br>

                            <label className="text-lg block font-bold  pb-2 mt-8">Password:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 mt-2" type="password" name='password' value={password} onChange={(event) => handlePasswordInput(event) }/>
                            <br></br>

                            <label className="text-lg block font-bold  pb-2 mt-8">Confirm Password:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 mt-2" type="password" name='password' value={confirmpassword} onChange={(event) => handleConfirmPasswordInput(event)}/>
                            <br></br>

                                <button className="border-2 border-red-300 mt-10 px-2 hover:bg-red-200" onClick={handleSignedUp}>Sign up</button>
                                <br></br>
                                <h3 className="mt-10 text-lg">Signed up already?</h3>
                                 <a href='/login' className="border-2 border-red-300 mt-4 px-2 hover:bg-red-200">Log In</a>
                            
                        </form>
                    </>
            }
        </div>
    )
}

export default SignupForm
