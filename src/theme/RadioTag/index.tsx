import React from "react";
import { formatClass } from "../../util/formatClass";
import { RadioTagProps } from "./type";

const RadioTag: React.FC<RadioTagProps> = ({
  value,
  label,
  checked = false,
  onChange,
  name = "radio",
  className = "",
  style,
  disabled = false,
}) => {
  return (
    <div className={formatClass(`radio-tag ${className}`)} style={style}>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={value}>{label || value}</label>
    </div>
  );
};

export default RadioTag;
