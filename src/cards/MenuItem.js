import React from "react";

function MenuItem({ name }) {
  return (
    <div className="rounded-md  transition duration-500 ease-in-out p-1 bg-primary-hint hover:bg-primary-fueltown  transform hover:-translate-y-1 hover:scale-110 sm:w-20 text-center cursor-pointer">
      <label className="text-md sm:text-xl text-primary-white cursor-pointer">
        {name}
      </label>
    </div>
  );
}

export default MenuItem;
