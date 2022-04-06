import React from "react";
import HeaderRecipes from "./../components/HeaderRecipes";
import dailyData from "./../assets/json/dailyData.json";
import RecipeCard from "./../components/RecipeCard";

const DailyRecomendation = () => {
  return (
    <>
      <HeaderRecipes />
      <section className='pt-20 px-5'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold uppercase'>
            Daily Random Recomendation
          </h1>
        </div>
        <div className='pt-10'>
          <p className='text-2xl'>
            This recipes are retrieved from{" "}
            <a
              className=' underline hover:text-[#09936F]'
              href='https://spoonacular.com/food-api'>
              Spoonacular API
            </a>
            , click on the recipe to get more information.
          </p>
        </div>
        <div className='pt-10 flex flex-col md:flex-row items-center justify-center'>
          {dailyData.recipes.map((recipe) => (
            <RecipeCard data={recipe} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DailyRecomendation;
