import React from "react";

const Button = ({
  onClick,
  children = "Common Name",
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button className={` px-2 py-2    ${className}`} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
