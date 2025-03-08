import React from 'react'
import Addstack from '../Habits/AddStack/AddStack.jsx';
import ListStack from '../Habits/ListStack/ListStack.jsx';
import MiddleStack from '../Habits/MiddleStack/middle'
import './Maincontent.css'

const Maincontent = () => {
  return (
    <div className="Main-content">
      <Addstack/>
      <MiddleStack/>
      <ListStack/>
    </div>
  )
}

export default Maincontent

