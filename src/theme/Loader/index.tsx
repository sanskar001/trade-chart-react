import React from "react";

interface LoaderProps {
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ style }) => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="loader" style={style}></div>
    </div>
  );
};

export default Loader;
