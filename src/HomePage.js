import React, { useState } from 'react';
import SearchBar from './SearchBar';
import RecipeList from './RecipeList';
import { fetchRecipes } from './edamam';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async (query) => {
    const data = await fetchRecipes(query);
    setRecipes(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default HomePage;
