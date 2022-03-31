import React from "react";

const Header = () => {
  return (
    <>
      <div>
        <header className='grid grid-rows-2'>
          <div className='flex align-middle'>
            <a
              href='/portfolio'
              className=' bg-green-800 border-2 m-2 p-2  rounded-md  items-start text-white font-bold '>
              Regresar
            </a>
          </div>
          <nav className='text-center  flex items-center flex-col md:flex-row md:justify-around'>
            <a
              href='/recipes'
              className='text-white p-2 w-full border bg-[#09936F] border-white md:w-fill hover:bg-green-900'>
              Recipe recomendation based on ingredients
            </a>
            <a
              href='/calories'
              className='text-white p-2 w-full  border bg-[#09936F] border-white md:w-fill  hover:bg-green-900'>
              Meal planer based on Calories
            </a>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
