import React from "react";
import "./Navbar.css";
import { useAppContext } from "../contextApi/contextApi";
import Logo from '../../assets/Habit.png'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = () => {
  // const { toggleTheme } = useAppContext();
  return (
 <nav className="navbar">
  <div className="navlogo"> 
  <img src={Logo} alt="logo" className="logo" />
  <h1>Habit Stack</h1>
  </div>
   
 </nav>
  )
}
export default Navbar;

