import React from 'react'
import './login.css'
import {  useNavigate } from 'react-router-dom'
const Login = () => {
      const navigate = useNavigate()

      const handleLogin=()=>{
            navigate('/home')
      }
  return (
    <div className='abc'>

      <h1>Login</h1> 
      <div className=''>
      <input type="text" placeholder='Enter the Username' className='int'/> 
      <input type="password" placeholder='Enter the password' className='int'/>
      </div>
      <div className='btn'>
      <button className='sub' onClick={handleLogin}>Login</button>
      <button className='sub' onClick={handleLogin}>Signup</button>
      </div>
    </div>
  )
}

export default Login 