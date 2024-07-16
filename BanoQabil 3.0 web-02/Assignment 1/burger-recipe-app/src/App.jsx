// src/App.js
import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import { recipes } from './data/recipes';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <h1>Burger Recipe App</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <RecipeList recipes={filteredRecipes} onSelectRecipe={handleSelectRecipe} />
      {selectedRecipe && <RecipeDetails recipe={selectedRecipe} />}
    </div>
  );
};

export default App;
