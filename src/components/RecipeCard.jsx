import React from "react";

const RecipeCard = (data) => {
  return (
    <>
      <div className='max-w-sm rounded overflow-hidden shadow-lg m-2 p-2 flex-col md:flex-row transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:shadow-[#64ffda] duration-300'>
        <a href={data.data.sourceUrl} target='_blank' rel='noreferrer'>
          <img className='w-full' src={data.data.image} alt={data.data.title} />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>{data.data.title}</div>
            <p className='text-gray-700 text-base'>Recipe information:</p>
          </div>
          <div className='px-6 pt-4 pb-2 grid grid-cols-2 gap-3 items-center'>
            <div>
              <p>Time:</p>
              <p>Servings:</p>
              <p>Type:</p>
            </div>
            <div>
              <p>{data.data.readyInMinutes} Minutes</p>
              <p>{data.data.servings}</p>
              <p>{data.data.dishTypes}</p>
            </div>
          </div>
          <div className='pt-3'>
            {data.data.diets.map((diet) => (
              <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                #{diet}
              </span>
            ))}
          </div>
        </a>
      </div>
    </>
  );
};

export default RecipeCard;
