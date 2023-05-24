import React from "react";
import { ButtonProps } from "./type";
import { formatClass } from "../../util/formatClass";

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  btnClass = "",
  className = "",
  style,
  disabled = false,
  ...props
}) => {
  const buttonClass = formatClass(`btn ${btnClass} ${className}`);

  return (
    <button
      type={type}
      style={style}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
