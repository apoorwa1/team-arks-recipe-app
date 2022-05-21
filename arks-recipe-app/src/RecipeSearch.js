import React, { useEffect, useState } from "react";
import RecipeResults from "./RecipeResults";
import styles from "./recipesearch.module.css";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: black;
  font-family: Georgia;
`;
const Wrapper = styled.section`
  padding: 1em;
  background: linear-gradient(-225deg, #ffe29f 0%, #ffa99f 48%, #ff719a 100%);
`;

const Input = styled.input`
  padding: 1em;
  margin: 1em;
  color: "palevioletred";
  background: #c1e1c1;
  border: none;
  border-radius: 5px;
  width: 30em;
`;

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.75em;
  border: 2px solid palevioletred;
  border-radius: 5px;
  display: block;
`;

const Box = styled.div({
  background: "palevioletred",
  height: "50px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
});

const RecipeSearch = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("garlic bread");
  const APP_ID = "d0a53431";
  const APP_KEY = "55e02304fa052b072bdcc106cc075371";
  const APP_URL = `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  console.log(APP_URL);

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
      <Wrapper>
        <Title>ARKS Recipe App</Title>
      </Wrapper>

      <form>
        <Box>
          <Input
            placeholder="What do you fancy"
            type="text"
            inputColor="rebeccapurple"
            onChange={onChange}
          />
          {/* <input
          className={styles.searchbar}
          type="text"
          placeholder="What do you fancy"
          onChange={onChange}
          data-testid="input"
        ></input> */}
          <Button type="submit" onClick={onClick}>
            Search
          </Button>
          {/* <button
          className={styles.searchButton}
          type="submit"
          onClick={onClick}
          data-testid="btn"
        >
          Search
        </button> */}
        </Box>
      </form>
      <div className={styles.recipeGrid}>
        {recipe.map((item, index) => (
          <RecipeResults
            key={index}
            label={item.recipe.label}
            ingredients={item.recipe.ingredients}
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
