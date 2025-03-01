import './App.css';
import Box from '@mui/material/Box';
import React from 'react';
import TextField from '@mui/material/TextField';
import Header from './components/Header.jsx';
import Addstack from './components/Habits/Addstack.jsx';

const App = () => {
  return (
    <>
      <Header />
      <Addstack/>
      <div className="main">
        <h1>Todo List</h1>
        <Box sx={{ width: 500, maxWidth: '100%', mt: 2 }}>
          <TextField fullWidth label="Enter Task" id="taskInput" />
        </Box>
      </div>
    </>
  );
};

export default App;
