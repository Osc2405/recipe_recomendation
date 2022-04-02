import React from "react";

const RecipeCard = (data) => {
  return (
    <>
      <div className=''>
        <a
          href={data.data.sourceUrl}
          target='_blank'
          className=' flex text-center justify-center items-center flex-col border-2 border-green-500 rounded-xl p-3 m-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:text-[#64ffda] duration-300'>
          <div>
            <img src={data.data.image} alt={data.data.title} className='' />
            <h2 className='text-black p-5'>{data.data.title}</h2>

            <div className=' grid grid-cols-2 content-center items-center text-center'>
              <div>
                <p>Preparation Minutes:</p>
                <p>Servings</p>
              </div>
              <div>
                <p>{data.data.readyInMinutes}</p>
                <p>{data.data.servings}</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default RecipeCard;
