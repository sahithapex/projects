import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import { AppProvider } from "./components/contextApi/contextApi"; 
import Maincontent from './components/Dashboard/Maincontent.jsx';
import Headbar from './components/Header/Headbar.jsx';




const App = () => {
  return (
    <AppProvider> 
      <Router>  
        <Navbar />
        <Headbar />
        <Maincontent />
        <Routes>
          <Route path="" element="" />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
