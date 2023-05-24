import React from "react";
import { formatClass } from "../../util/formatClass";

type ButtonType = "button" | "submit" | "reset";

type ButtonClassType = "btn-outlined" | "";

type ClickHandlerType = React.MouseEventHandler<HTMLButtonElement>;

type PropsType =
  | string
  | boolean
  | undefined
  | ButtonType
  | React.ReactNode
  | ClickHandlerType
  | ButtonClassType
  | React.CSSProperties;

interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonType;
  onClick?: ClickHandlerType;
  btnClass?: ButtonClassType;
  className?: string;
  style?: React.CSSProperties;
  disabled?: boolean;
  [key: string]: PropsType;
}

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
