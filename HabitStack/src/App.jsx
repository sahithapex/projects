import './App.css';
import React from 'react';
import Header from './components/Header.jsx';
import Addstack from './components/Habits/Addstack.jsx';
import Liststack from './components/Liststack/Liststack.jsx';
import { AppProvider } from "./components/contextApi/contextApi"; 

const App = () => {
  return (
    <AppProvider> 
      <Header />
      <Addstack />
      <div className="main">
        <Liststack />
      </div>
    </AppProvider>
  );
};

export default App;

