import React from 'react'
import Addstack from '../Habits/Addstack/Addstack.jsx';
import Liststack from '../Habits/liststack/Liststack.jsx';
import Middlestack from '../Habits/Middlestack/middle'

const Maincontent = () => {
  return (
    <div className="main-content">
      <Addstack/>
      <Middlestack/>
      <Liststack/>
    </div>
  )
}

export default Maincontent

