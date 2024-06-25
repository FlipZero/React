import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  const { label, image, source, calories, ingredientLines } = recipe;

  return (
    <Card className="recipe-card">
      <CardMedia
        component="img"
        height="340"
        image={image}
        alt={label}
      />
      <CardContent>
        <Typography variant="h6">{label}</Typography>
        <Typography variant="body2" color="textSecondary">
          {source}
        </Typography>
        <div className="recipe-info">
          <Typography variant="body2" color="textSecondary">
            Calories: {Math.round(calories)}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Ingredients: {ingredientLines.length}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
