import React from 'react';
import portfolio from '../img/portfolioimg.jpg';
function ProjectInstance({ name, link }) {
  return (
    <div className="rounded-md w-1/2 sm:w-1/3 lg:m-5  sm:h-auto  transition duration-500 ease-in-out p-1 shadow-2xl  bg-primary-hint hover:bg-primary-fueltown hover:w-full  transform hover:-translate-y-3 hover:scale-110  text-center cursor-pointer">
      <a href={link} className="flex text-primary-white self-center ">
        <div className="flex flex-col space-y-2    ">
          <label className="text-primary-white text-xl">{name}</label>

          <div className="flex justify-center items-center w-30 h-30 p-3 self-center">
            <img
              src={portfolio}
              className="self-center w-full h-full rounded-lg  cursor-pointer"
              alt="yigit"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectInstance;
