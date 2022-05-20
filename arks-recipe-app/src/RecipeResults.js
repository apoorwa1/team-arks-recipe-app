import React from "react";

const RecipeResults = ({ ingredients, image, label, text, url }) => {
  return (
    <div className="recipe-grid">
      <div className="recipe-card">
        <h1>{label}</h1>
        <p>{ingredients}</p>
        <img src={image} alt="recipeimage"></img>
        <a href={url} target="_blank">
          {text}
        </a>
      </div>
    </div>
  );
};

export default RecipeResults;
