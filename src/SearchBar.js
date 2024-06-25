import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-container">
      <TextField
        className="text"
        variant="outlined"
        placeholder="Szukaj przepisów..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Szukaj
      </Button>
    </div>
  );
};

export default SearchBar;
