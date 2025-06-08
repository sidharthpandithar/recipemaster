import styles from "./fooddetails.module.css";
import { useEffect, useState } from "react";
import Itemlist from "./Itemlist";
export default function Fooddetail({ foodid }) {
  const [isLoading, setisLoading] = useState(true);
  const [food, setFood] = useState({});
  const API_KEY = "4f51542caaf342b1924b459adb39d236";
  const URL = `https://api.spoonacular.com/recipes/${foodid}/information`;
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setisLoading(false);
    }
    fetchFood();
  }, [foodid]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h2 className={styles.recipeName}>{food.title}</h2>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👨 Serves {food.servings}</strong>
          </span>
          <span>
            {food.vegetarian ? (
              <strong>🟢 Vegetarian </strong>
            ) : (
              <strong>🔴 Non Vegetarian</strong>
            )}
            <strong />
          </span>
        </div>
        <div className={styles.recipePrice}>
          <span>
            Rs.{Math.floor((food.pricePerServing / 100) * 85)} Per Serving{" "}
          </span>
        </div>
        <h2>Ingredients</h2>
        <Itemlist food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recipeInstructions}>
          <ol>
            {isLoading ? (
              <p>Loading......</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
