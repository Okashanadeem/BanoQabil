// src/components/RecipeDetails.js
import React from 'react';

const RecipeDetails = ({ recipe }) => (
  <div>
    <h2>{recipe.name}</h2>
    <p>Ingredients: {recipe.ingredients.join(', ')}</p>
    <p>Instructions: {recipe.instructions}</p>
    <p>Cooking Time: {recipe.cookingTime} minutes</p>
  </div>
);

export default RecipeDetails;
