import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
/*import Home from './components/Home';*/
import { Routes, Route, useNavigate } from 'react-router-dom';


function App() {
  /*const navigate = useNavigate()*/

  const [apiResponse, setApiResponse] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
    console.log(response)
      setApiResponse(response.data.message)
    }

    fetchData()
  }, [])

  return (
    <div>
<img src="https://c.tenor.com/vQWKd3kFawAAAAAd/trump-shrug.gif" alt="Picture of Donald Trump"/>

     <h1 style={{color: "red"}}>
     What does Trump Think?
       </h1> 
     <br></br>
    {apiResponse}
    </div>
  )
}




export default App;
