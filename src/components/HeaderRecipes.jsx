import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "./../assets/img/3.jpg";
import { Link } from "react-router-dom";

function HeaderRecipes() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className='bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <Link to='/' className='flex items-center justify-center'>
                  <img
                    src={logo}
                    className=' mr-3 h-6 sm:h-10 rounded-full'
                    alt='Logo'
                  />
                  <span class='self-center text-xl font-semibold whitespace-nowrap text-[#09936F] block md:hidden xl:block'>
                    Recipe Recomendation
                  </span>
                </Link>
              </div>
            </div>
            <div>
              <div className='hidden md:block'>
                <div className='ml-10 flex items-baseline space-x-4 text-center'>
                  <Link
                    to='/ingredientsRecomendation'
                    className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Recomendation based on Ingredients
                  </Link>

                  <Link
                    to='/caloriesRecomendation'
                    className='text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Recomendation based on Calories
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to='/dailyRecomendation'
              className='hidden md:block text-white bg-[#09936F] hover:bg-green-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-center'>
              Daily Random Recomendation
            </Link>

            <div className='-mr-2 flex md:hidden'>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type='button'
                className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {!isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter='transition ease-out duration-100 transform'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in duration-75 transform'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'>
          {(ref) => (
            <div
              className='md:hidden border-gray-400 border-2 text-center'
              id='mobile-menu'>
              <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                <Link
                  to='/ingredientsRecomendation'
                  className='hover:bg-gray-700 text-black block px-3 py-2 hover:text-white  rounded-md text-base font-medium'>
                  Recomendation based on Ingredients
                </Link>

                <Link
                  to='/caloriesRecomendation'
                  className='text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  Recomendation based on Calories
                </Link>

                <Link
                  to='/dailyRecomendation'
                  className=' text-white bg-[#09936F] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  '>
                  Daily Random Recomendation
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default HeaderRecipes;
