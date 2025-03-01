import React from 'react'

const Addstack = () => {
  return (
    <div >
      <h1>Habit stack</h1>
      <div>
            <form type="submit" >
            <input type="text"
            placeholder='enter the stack name' />
       <select name="catageory" id="">
            <option value="Sports"></option>
            <option value="Prep you meal"></option>
            <option value="learing"></option>
            <option value="sleep"></option>
            <option value=""></option>
            </select> 
            </form>        
      </div>
      <div>
            <input type="text"
            placeholder='Please enter your habit stack' />
      </div>
      <hr/>
    </div>
  )
}

export default Addstack
