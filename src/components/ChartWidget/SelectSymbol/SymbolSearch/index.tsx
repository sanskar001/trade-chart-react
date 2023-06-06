import React from "react";
import ArrowIcon from "@/components/SVG/ArrowIcon";
import Button from "@/theme/Button";

interface SymbolSearchProps {
  product: string;
}

const SymbolSearch: React.FC<SymbolSearchProps> = ({ product }) => {
  return (
    <div className="h-full flex flex-col">
      <h1>{product}</h1>
    </div>
  );
};

export default SymbolSearch;

// -------------------------------------------------------------------------

interface HeadingProps {
  onBack: () => void;
}

export const Heading: React.FC<HeadingProps> = ({ onBack }) => {
  return (
    <div className="flex items-center gap-2">
      <Button className="p-1" onClick={onBack}>
        <ArrowIcon direction="left" />
      </Button>
      <h4>Symbol Search</h4>
    </div>
  );
};
