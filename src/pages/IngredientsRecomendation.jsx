import React, { useState } from "react";
import HeaderRecipes from "./../components/HeaderRecipes";

const IngredientsRecomendation = () => {
  const [mealData, setMealData] = useState(null);
  const [ingredients, setIngredients] = useState(2000);
  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=cb1c464d94f142c08b156c5beddade8b&timeFrame=day`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  function handleChange(e) {
    setIngredients(e.target.value);
  }
  return (
    <>
      <div>
        <HeaderRecipes />
        <section>
          <section className='controls'>
            <input
              type='number'
              placeholder='Calories (e.g. 2000)'
              onChange={handleChange}
            />
            <button onClick={getMealData}>Get Daily Meal Plan</button>
          </section>
          <section>{mealData && <p>Hola</p>}</section>
        </section>
      </div>
    </>
  );
};

export default IngredientsRecomendation;
