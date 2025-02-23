import React, {useState,useRef} from 'react'
import './App.css'


const API_KEY = "458600d2c5043f5918742b61614b4484sahith";  

const App = () => {
  const [query,setquery]=useState("")
  const [weather,setweather]=useState(null)
  const [loading,setloading]=useState(false)
  const reffocus=useRef(null)


const onfetchdata= async ()=>{

  if (reffocus.current){
    reffocus.current.focus()
  }
   setloading(true)
   try{
  const url= `https://api.weatherstack.com/current?access_key=${API_KEY}&query=${query}`;
  const response= await fetch(url)
  const result = await response.json()
  console.log(result)
  setweather(result);
}  catch (error) {
  console.error("Error fetching weather data:", error);
}
setloading(false)
}

  return (
    <div>
    <div className='main'>
      <h1 className='text'>Weather App</h1>
      <p>{new Date().toLocaleString()}</p>
      <div>
        <input type="text" ref={reffocus}
        placeholder="Enter the city name"
        value={query} 
        onChange={(e)=>setquery(e.target.value)}
         />
         <button onClick={onfetchdata}>click me</button>
      </div>
      <div>{loading ? <p>loading...</p> :
      <div>
       {weather && (
        <div>
          <p>City Name: {weather.location.name}</p>
          <p>Country: {weather.location.country}</p>
          <p>Latitude: {weather.location.lat}</p>
          <p>Longitude: {weather.location.lon}</p>
          <p>{weather.current.observatcurrent}</p>
          <p>Temperature: {weather.current.temperature}</p>
          <p>Wind Degree: {weather.current.wind_degree}</p>
          <p>{weather.current.weather_descriptions}</p>
          <img src={weather.current.weather_icons} alt="icon" />
        </div> 
        )}      
        
      </div>
}
      </div>
      </div>


    <div>
    <hr className='line'></hr>
    </div>
    </div>
  )
}

export default App
