import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Button } from '@mui/material';


function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadow = isHovered ? '0 0 15px rgba(255, 213, 77, 0.5)' : 'none';
  const color = isHovered ? 'rgba(255, 213, 77, 0.5)' : 'white';

  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent' }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, boxShadow, borderRadius: '10px', color}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Saurabh Bhole
        </Typography>
        <Button color="inherit">Login</Button>

      </Toolbar>
    </AppBar>
  );
}
  
  export default Navbar;
  