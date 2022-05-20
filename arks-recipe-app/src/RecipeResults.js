import React from "react";
import styles from "./reciperesults.module.css";

const RecipeResults = ({ ingredients, image, label, text, url }) => {
  return (
    <div className={styles.recipeGrid}>
      <div className={styles.recipeCard}>
        <h1 className={styles.title}>{label}</h1>
        <p className={styles.ingredients}>{ingredients}</p>
        <img className={styles.image} src={image} alt="recipeimage"></img>
        <a href={url} target="_blank">
          {text}
        </a>
      </div>
    </div>
  );
};

export default RecipeResults;
