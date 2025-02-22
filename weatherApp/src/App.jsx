import React, {useState,useRef} from 'react'

const API_KEY = "458600d2c5043f5918742b61614b4484";  

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
      <h1>Weather App</h1>
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
          <h1>{weather.location.name}</h1>
          <h1>{weather.location.country}</h1>
          <h1>{weather.location.lat}</h1>
          <h1>{weather.location.lon}</h1>
          <h1>{weather.current.observatcurrent}</h1>
          <h1>{weather.current.temperature}</h1>
          <h1>{weather.current.wind_degree}</h1>
          <h1>{weather.current.weather_descriptions}</h1>
          <img src={weather.current.weather_icons} alt="icon" />
        </div>
)}      
        <p></p>
      </div>
}
      
      </div>
      
    </div>
  )
}

export default App
