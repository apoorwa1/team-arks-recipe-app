import React from "react";
import styles from "./reciperesults.module.css";

const RecipeResults = ({ ingredients, image, label, text, url }) => {
  return (
    <div className={styles.recipeGrid}>
      <div className={styles.recipeCard}>
        <h1 className={styles.title}>{label}</h1>
        <a href={url} target="_blank" rel="noreferrer">
          {text}
        </a>
        <ul className={styles.ingredients}>
          {ingredients.map((ingredient) => (
            <li key={ingredient.text}>{ingredient.text}</li>
          ))}
        </ul>
        <img className={styles.image} src={image} alt="recipeimage"></img>
      </div>
    </div>
  );
};

export default RecipeResults;
