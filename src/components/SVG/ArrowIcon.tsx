import React from "react";

type Direction = "left" | "right" | "top" | "down";

interface ArrowIconProps {
  direction?: Direction;
}

// eslint-disable-next-line
const directionAngle: { [key in Direction]: string } = {
  left: "90",
  right: "270",
  top: "180",
  down: "0",
};

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction = "down" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="17"
      fill="none"
      color="currentColor"
      viewBox="0 0 18 17"
      style={{ transform: `rotate(${directionAngle[direction]}deg)` }}
    >
      <path stroke="currentColor" strokeWidth="1.1" d="M4 6l5 5 5-5"></path>
    </svg>
  );
};

export default ArrowIcon;
