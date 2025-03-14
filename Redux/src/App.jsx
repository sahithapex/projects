import Login from './components/login.jsx'
import Home from './components/Maincontent/home.jsx' 
import {Routes,Route} from 'react-router-dom'
import Form from './components/Forms/Forms.jsx'
import './App.css'

function App() {
 

  return (
    <>
    <Form/>
    <Routes>
      {/* <Route path='/' element={<Login/>}></Route> */}
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/form' element={<Form/>}></Route>

    </Routes>
  
      
    </>
  )
}

export default App
