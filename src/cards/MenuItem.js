import React from 'react';

function MenuItem({ name }) {
  return (
    <div className="rounded-md  transition duration-500 ease-in-out p-1 bg-primary-hint hover:bg-primary-sunflower  transform hover:-translate-y-1 hover:scale-110  w-12 sm:w-20 text-center cursor-pointer">
      <label className="text-xs  sm:text-xl text-primary-white cursor-pointer">
        {name}
      </label>
    </div>
  );
}

export default MenuItem;
