import React from "react";
import SelectSymbol from "../SelectSymbol";
import SelectResolution from "../SelectResolution";

const ChartHeader: React.FC = () => {
  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center p-[2px]">
        <SelectSymbol />
        <SelectResolution />
      </div>
    </div>
  );
};

export default ChartHeader;
