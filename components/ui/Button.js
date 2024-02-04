"use client";

import clsx from "clsx";

const Button = ({ type, text, onClick, actionButton }) => {
  return (
    <button
      className={clsx(
        actionButton && "bg-orange-700 rounded-full p-2 text-white",
        "bg-orange-700 px-2 text-white"
      )}
      onClick={onClick}
      text={text}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
