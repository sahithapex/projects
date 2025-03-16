import React from 'react'
import Addstack from '../Habits/AddStack/AddStack.jsx';
import ListStack from '../Habits/ListStack/ListStack.jsx';
import MiddleStack from '../Habits/MiddleStack/middle.jsx'
import './Maincontent.css'

const Maincontent = () => {
  return (
    <div className="Main-content">
      <Addstack/>
      <ListStack/>
    </div>
  )
}

export default Maincontent

