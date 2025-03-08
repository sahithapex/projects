import './App.css';
import React from 'react';
import Header from './components/Main content/Header.jsx';
import { AppProvider } from "./components/contextApi/contextApi"; 
import Maincontent from './components/Main content/Maincontent.jsx'


const App = () => {
  return (
    <AppProvider> 
      <Header />
      <Maincontent/>
    </AppProvider>
  );
};

export default App;

