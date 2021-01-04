import React, { useState } from 'react';
import axios from 'axios'
import imgNine from './../images/nine.jpg'
import LearnPage from './LearnPage';


function LoginForm() {
    const [firstname, setFirstName] = useState('');
  const [password, setPassword ] = useState('');
  const [LoggedIn, setLoggedIn ] = useState(false);

      
  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value)
  };

      const handlePasswordInput = (event) => {
        setPassword(event.target.value)
      };

     


    function handleLoggedIn(event) {
        event.preventDefault();
        const newUser ={
          firstname: firstname,
          password: password
        }
        //  console.log({name,email,password})
         axios.post("http://localhost:5000/user/login", newUser)
            .then(res => {
            //  setLoggedIn(true)
            console.log("Logged in successfully")
           })
           .catch(err => {
             console.log(err)
           })
          
        }
    

      function handleLogout(event){
        event.preventDefault();
        setLoggedIn(false)
      }



    return (
        <div className="bg-center bg-cover bg-gray-200" style={{backgroundImage: `url(${imgNine})`}}>

            {
                LoggedIn
                    ?
                    <>
                        <br></br>
                        <h3>WELCOME, AMBITIOUS ANNA.</h3>
                        <h4>Did you know? You are exactly what the world need to survive.</h4>
                        <br></br>
                        <button className="border-2 border-green-400 mt-10 px-2" onClick={handleLogout}>Logout</button>
                        <LearnPage />

                    </>
                    :
                    <>

                        <form className="shadow-xl mx-4 px-4 py-6 lg:mx-96 lg:px-6 lg:py-6 bg-transperent">
                            
                            <label className="text-lg block font-bold  pb-2 mt-8">Name:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 mt-2" type="text" name='name' value={firstname} onChange={handleFirstNameInput}/>
                            <br></br>

                            <label className="text-lg block font-bold  pb-2 mt-8">Password:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 mt-2" type="password" name='password' value={password} onChange={(event) => handlePasswordInput(event) }/>
                            <br></br>


                                <button className="border-2 border-red-300 mt-10 px-2 hover:bg-red-200" onClick={handleLoggedIn}>Login</button>
                                <br></br>
                                <h3 className="mt-10 text-lg">Dont have an account yet?</h3>
                                <a href="/signup" className="border-2 border-red-300 mt-4 px-2 hover:bg-red-200">Sign Up</a>
                            
                        </form>
                    </>
            } 
        </div>
    )
}

export default LoginForm
