import React from "react";

const Input = ({ name, type, placeholder, value }) => {
  return (
    <>
      <input
        className="w-full p-2 border border-gray-200"
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
