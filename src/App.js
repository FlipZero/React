import React from 'react';
import { CssBaseline } from '@mui/material';
import Header from './Header';
import HomePage from './HomePage';
import './App.css';

function App() {
  return (
    <div>
      <CssBaseline />
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
