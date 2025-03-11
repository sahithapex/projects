import Login from './components/login.jsx'
import Home from './components/Maincontent/home.jsx' 
import {Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>

    </Routes>
  
      
    </>
  )
}

export default App
