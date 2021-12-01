import React from "react";

function ContactInput({ value, title, placeholder, callback }) {
  return (
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        {title}
      </label>
      <input
        value={value}
        class="shadow appearance-none border-2 border-primary-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:border-primary-bluebell focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        onChange={(e) => {
          callback(e.target.value);
        }}
        placeholder={`${placeholder}`}
      />
    </div>
  );
}

export default ContactInput;
