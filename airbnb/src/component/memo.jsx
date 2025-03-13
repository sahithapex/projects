import React, { useState } from 'react'
import Expensicevalue from './Expensicevalue'


const Memo = () => {
      const [num,setnum]=useState(99)
      const increment=()=>{
            setnum( num+1 )

      }
      const decrement=()=>{
            setnum(num-1 )
            
      }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <Expensicevalue num={num} />
      <button onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default Memo
