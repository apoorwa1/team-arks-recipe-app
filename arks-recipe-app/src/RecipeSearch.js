import React, { useEffect, useState } from "react";
import RecipeResults from "./RecipeResults";

const RecipeSearch = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const APP_ID = "d0a53431";
  const APP_KEY = "cbe355ceef76e5412fc005a5dc25e442";
  const APP_URL = `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  async function getRecipe() {
    const response = await fetch(APP_URL);
    const data = await response.json();
    console.log(data);
    setRecipe(data.hits);
  }
  useEffect(() => {
    getRecipe();
  }, [input]);

  function onChange(e) {
    //console.log("this is search", e.target.value);
    setSearch(e.target.value);
  }
  function onClick(e) {
    e.preventDefault();
    setInput(search);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placholder="What do you fancy"
          onChange={onChange}
        ></input>
        <button className="search-button" type="submit" onClick={onClick}>
          Search
        </button>
      </form>
      {recipe.map((item, index) => (
        <RecipeResults
          key={index}
          label={item.recipe.label}
          ingredients={item.recipe.ingredientLines}
          image={item.recipe.image}
          text="Click here to see the full recipe"
          url={item.recipe.url}
        />
      ))}
    </div>
  );
};

export default RecipeSearch;
