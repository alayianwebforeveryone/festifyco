import React from "react";

const Button = ({
  onClick,
  children = "Common Name",
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
    onClick={onClick}
      type={type}
    className={` px-4 py-2 rounded-full text-white  ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
