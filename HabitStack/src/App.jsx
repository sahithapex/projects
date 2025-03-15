import './App.css';
import React from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import { AppProvider } from "./components/contextApi/contextApi"; 
import Maincontent from './components/Main content/Maincontent.jsx'



const App = () => {
  return (
    <AppProvider> 
      <Navbar />
      <Maincontent/>
    </AppProvider>
  );
};

export default App;

