import React from "react";

const RecipeResults = ({ key, ingredients, image, label }) => {
  return (
    <div className="recipe-grid">
      <div className="recipe-card">
        <h1>{label}</h1>
        {/* <ul>
          <li></li>
        </ul> */}
        <p>{ingredients}</p>
        <img src={image} alt="recipeimage"></img>
      </div>
    </div>
  );
};

export default RecipeResults;
