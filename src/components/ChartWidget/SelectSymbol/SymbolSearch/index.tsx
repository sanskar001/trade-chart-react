import React from "react";

interface SymbolSearchProps {
  product: string;
  onBack: () => void;
}

const SymbolSearch: React.FC<SymbolSearchProps> = ({ product, onBack }) => {
  return (
    <div className="h-full flex flex-col">
      <h1>{product}</h1>
      <div onClick={onBack}>back</div>
    </div>
  );
};

export default SymbolSearch;
