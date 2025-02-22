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
        <h1>{weather?.location?.name}</h1>
       
        
        <p></p>
      </div>
}
      
      </div>
      
    </div>
  )
}

export default App
