import React from 'react';

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div onClick={() => onClick(recipe)}>
      <h2>{recipe.name}</h2>
      <p>Cooking Time: {recipe.cookingTime}</p>
    </div>
  );
};

export default RecipeCard;
