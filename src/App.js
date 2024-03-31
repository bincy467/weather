
import React, { useEffect, useState } from 'react';
import axios from "axios"

import './App.css';

function App() {

const[weatherdata,setweatherdata]=useState({

  main:{},
  weather:[{}]
});

useEffect (()=>{

  async function getdata(){
    const Api= "https://api.openweathermap.org/data/2.5/weather?q=Palakkad,india&appid=cd508e904800802440254761b832d5de&units=metric";


try{
  let response=await axios.get(Api)
  console.log(response.data);
  setweatherdata(response.data)
}catch(err){
  console.log(err);
}

  }
  getdata()
},[])



  return (
    <div className='home-container'>
      <div className='main-container'>
        <div className='card'>
          <h1>{weatherdata.name}</h1>
          <h1>{`${Math.round(weatherdata.main.temp)}°C`}</h1>
          <h1>{weatherdata.weather[0].main}</h1>
          <h6>{weatherdata.weather[0].description}</h6>
          

        </div>
      </div>
     
    </div>
  );
}

export default App;
