import React from "react";
import HeaderRecipes from "./../components/HeaderRecipes";
import landingChef from "./../assets/img/spot-10.png";

const HomeRecipes = () => {
  return (
    <>
      <div className='bg-[#000000] h-100%'>
        <HeaderRecipes />
        <div className='p-5 grid grid-cols-1 md:grid-cols-2'>
          <div className='text-white'>
            <h1 className=' font-bols text-4xl py-5'>
              Welcome to my Recipe Recomendation App.
            </h1>
            <p className='text-2xl py-5'>
              Select one of the options and fill the options to get the
              recomendations:
            </p>
            <ol className=' list-disc px-8 text-2xl'>
              <li className='py-2'>
                <a href='/recipes' className='hover:text-[#09936F]'>
                  Recipe recomendation based on ingredients
                </a>
              </li>
              <li className='py-2 '>
                <a href='/calories' className='hover:text-[#09936F]'>
                  Meal planer based on Calories
                </a>
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
          <div>
            <img src={landingChef} alt='Chef' />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRecipes;
