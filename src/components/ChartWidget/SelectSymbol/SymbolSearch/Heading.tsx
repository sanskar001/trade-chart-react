import React from "react";
import Button from "@/theme/Button";
import ArrowIcon from "@/components/SVG/ArrowIcon";

interface HeadingProps {
  onBack: () => void;
}

const Heading: React.FC<HeadingProps> = ({ onBack }) => {
  return (
    <div className="flex items-center gap-2">
      <Button className="p-1" onClick={onBack}>
        <ArrowIcon direction="left" />
      </Button>
      <h4>Symbol Search</h4>
    </div>
  );
};

export default Heading;
