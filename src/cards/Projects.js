import React from "react";
import stack from "../img/stack.png";
function ProjectInstance({ name }) {
  return (
    <div className="rounded-md w-1/2 sm:w-1/3  m-5 transition duration-500 ease-in-out p-1 shadow-2xl  bg-primary-hint hover:bg-primary-fueltown  transform hover:-translate-y-1 hover:scale-110 hover:w-1/4 text-center cursor-pointer">
      <div className="flex flex-col space-y-3">
        <label className="text-primary-white text-xl">{name}</label>

        <div className="flex justify-center items-center w-20 h-20 self-center">
          <img
            src={stack}
            className="self-center w-full h-full  cursor-pointer"
            alt="yigit"
          />
        </div>
        <p>Github Link</p>
      </div>
    </div>
  );
}

export default ProjectInstance;
