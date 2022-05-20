import React, { useEffect } from "react";

const RecipeSearch = () => {
  const APP_ID = "d0a53431";
  const APP_KEY = "cbe355ceef76e5412fc005a5dc25e442";
  const APP_URL = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function getRecipe() {
    const response = await fetch(APP_URL);
    const data = await response.json();
    console.log(data);
  }
  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <h1>This is search component</h1>
      <form>
        <input type="text" placholder="What do you fancy"></input>
        <button className="search-button">Search</button>
      </form>
    </div>
  );
};

export default RecipeSearch;
