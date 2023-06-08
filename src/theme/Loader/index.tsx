import React from "react";

interface LoaderProps {
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ style }) => {
  return <div className="spinner" style={style}></div>;
};

export default Loader;
