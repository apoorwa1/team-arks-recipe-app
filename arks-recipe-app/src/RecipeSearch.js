import React, { useEffect, useState } from "react";
import RecipeResults from "./RecipeResults";

const RecipeSearch = () => {
  const [recipe, setRecipe] = useState([]);
  const APP_ID = "d0a53431";
  const APP_KEY = "cbe355ceef76e5412fc005a5dc25e442";
  const APP_URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function getRecipe() {
    const response = await fetch(APP_URL);
    const data = await response.json();
    console.log(data);
    setRecipe(data.hits);
  }
  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <form>
        <input type="text" placholder="What do you fancy"></input>
        <button className="search-button">Search</button>
      </form>
      {recipe.map((item) => (
        <RecipeResults
          key={item.recipe.url}
          label={item.recipe.label}
          ingredients={item.recipe.ingredientLines}
          image={item.recipe.image}
        />
      ))}
    </div>
  );
};

export default RecipeSearch;
