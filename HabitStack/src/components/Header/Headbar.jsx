import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import NavbarItems from './Navitems';
import './Header.css'
export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography
        variant="h6"
        sx={{ p: 2, textAlign: 'center', fontWeight: 'bold' }}
      >
        Hi Sahith
      </Typography>
      <List>
        {NavbarItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
  <Button onClick={toggleDrawer(true)}>
    <Typography variant="h6" className="options-text">
      <Box component="span" className="options-icon">
        <SettingsIcon />
      </Box>
      <p>Options</p>
    </Typography>
  </Button>
  <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
    {list()}
  </Drawer>
</div>

  );
}
