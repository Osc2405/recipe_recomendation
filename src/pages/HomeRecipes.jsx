import React, { useState, useEffect } from "react";
import HeaderRecipes from "./../components/HeaderRecipes";
import landingChef from "./../assets/img/3-noBg.png";

import { Link } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;
const URL_Daily =
  "https://api.spoonacular.com/recipes/random?apiKey=" + API_KEY + "&number=3";
console.log(URL_Daily);

const HomeRecipes = () => {
  const [recipesOfTheDay, setRecipesOfTheDay] = useState([]);

  function getMealData() {
    fetch(URL_Daily)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        setRecipesOfTheDay(data);
        console.log(data);
      })
      .catch(() => {
        console.log("error");
      });
  }

  return (
    <>
      <div className='bg-white md:h-screen w-screen'>
        <HeaderRecipes />
        <div className='p-5 grid grid-cols-1 md:grid-cols-2'>
          <div className=''>
            <h1 className=' font-bols text-4xl py-5'>
              Welcome to my Recipe Recomendation App.
            </h1>
            <p className='text-2xl py-5'>
              Select one of the options and fill the fields to get your
              recomendations:
            </p>
            <ol className=' list-disc px-8 text-2xl'>
              <li className='py-2'>
                <Link
                  to='/ingredientsRecomendation'
                  className='hover:text-[#09936F]'>
                  Recipe recomendation based on ingredients
                </Link>
              </li>
              <li className='py-2 '>
                <Link
                  to='/caloriesRecomendation'
                  className='hover:text-[#09936F]'>
                  Meal planer based on Calories
                </Link>
              </li>
            </ol>
            <p className='py-5 text-2xl'>
              This app uses{" "}
              <a
                href='https://spoonacular.com/food-api'
                className=' text-[#09936F] hover:underline'>
                Spoonacular API
              </a>{" "}
              to get the info.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <img src={landingChef} alt='Chef' className='w-2/3 md:w-full ' />
          </div>
        </div>
        <div className='flex items-center'>
          <div className='flex items-center justify-start'>
            <p className='text-xl mx-2'>
              Visit my{" "}
              <a
                href='https://github.com/Osc2405'
                className=' hover:text-[#09936F] underline'>
                GitHub
              </a>{" "}
              for more projects or check my
            </p>{" "}
            <a
              href='/portfolio'
              className=' hover:text-[#09936F] underline text-xl'>
              Portfolio
            </a>
            <p className=' text-xl mx-2'>to see more about me</p>
          </div>
          <button onClick={getMealData} className='hidden bg-black text-white'>
            Get Daily Meal Plan
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeRecipes;
