import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar className="toolbar">
        <Typography variant="h6" className="title">
          Recipe Search
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
