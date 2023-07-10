import React from "react";
import SelectSymbol from "../SelectSymbol";
import SelectResolution from "../SelectResolution";
import SelectChartType from "../SelectChartType";

const ChartHeader: React.FC = () => {
  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center p-[2px]">
        <SelectSymbol />
        <SelectResolution />
        <SelectChartType />
      </div>
    </div>
  );
};

export default ChartHeader;
