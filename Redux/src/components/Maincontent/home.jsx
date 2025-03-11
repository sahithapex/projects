import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset } from '../../createRedux/counterSlice'

const Home = () => { 
      const count=useSelector((state)=> state.counter.count)
      const dispatch =useDispatch()
  return (
    <div>
     <button onClick={()=> dispatch(increment())}>Increase</button>
     <h1>{count}</h1>
      <button onClick={()=> dispatch(decrement())}>Decrease</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Home
