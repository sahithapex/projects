import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/home/home.jsx'
import Video from './pages/video/Video.jsx'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [Onmenu,setOnmenu]=useState(true)

  return (
    <div>
      <Navbar setOnmenu={setOnmenu}/> 
      <Routes>
        <Route path='/' element={<Home Onmenu={Onmenu} />}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
