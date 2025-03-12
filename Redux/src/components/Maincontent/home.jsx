import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset } from '../../createRedux/counterSlice'
import {handletheme} from '../../createRedux/toggle'
import './home.css'

const Home = () => { 
      const {count,isDark }=useSelector((state)=> ({  
        count: state.counter.count,
        isDark: state.toggle.isDark
      }))
      const dispatch =useDispatch()
  return (
    <div className= {`box  ${isDark ? 'dark' : 'light'}`}>
       <button onClick={() => dispatch(handletheme())}>Toggle Theme</button>
     <button onClick={()=> dispatch(increment())}>Increase</button>
     <h1>{count}</h1>
      <button onClick={()=> dispatch(decrement())}>Decrease</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Home
