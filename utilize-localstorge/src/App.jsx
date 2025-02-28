import './App.css';
import Box from '@mui/material/Box';
import * as React from 'react';
import TextField from '@mui/material/TextField';

const App = () => {
  return (
    <div className='main'>
      <h1>Todo list</h1>
    <Box sx={{ width: 500, maxWidth: '100%' }}>
      <TextField fullWidth label="Enter text" id="fullWidth" />
    </Box>
    </div>
  );
};

export default App;

