import React from 'react'
import './style.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <div>
      <AppBar position="static">
      <Toolbar>
        
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src="https://via.placeholder.com/40" alt="Logo" style={{ marginRight: 10 }} />
          <Typography variant="h6">MyApp</Typography>
        </Box>

       
        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
      
    </div>
  )
}

export default Header
