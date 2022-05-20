import React, { useEffect, useState } from "react";
import RecipeResults from "./RecipeResults";
import styles from "./recipesearch.module.css";

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
      <h1>ARKS Recipe App</h1>
      <form>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="What do you fancy"
          onChange={onChange}
          data-testid="input"
        ></input>
        <button
          className={styles.searchButton}
          type="submit"
          onClick={onClick}
          data-testid="btn"
        >
          Search
        </button>
      </form>
      <div className={styles.wrapper}>
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
    </div>
  );
};

export default RecipeSearch;
