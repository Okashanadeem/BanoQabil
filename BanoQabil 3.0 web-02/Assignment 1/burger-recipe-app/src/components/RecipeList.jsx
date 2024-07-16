// src/components/RecipeList.js
import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe }) => (
  <div>
    <h2>Recipes</h2>
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>
          <button onClick={() => onSelectRecipe(recipe)}>
            {recipe.name}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default RecipeList;
