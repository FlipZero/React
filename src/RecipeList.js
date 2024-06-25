import React from 'react';
import { Grid } from '@mui/material';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.recipe.uri}>
          <RecipeCard recipe={recipe.recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
