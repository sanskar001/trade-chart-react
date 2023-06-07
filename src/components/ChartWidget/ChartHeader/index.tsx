import React, { useContext } from "react";
import SelectSymbol from "../SelectSymbol";
import SelectResolution from "../SelectResolution";
import { ChartContext } from "@/store/chart-context";

const ChartHeader: React.FC = () => {
  const { symbol } = useContext(ChartContext);

  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center p-[2px]">
        <SelectSymbol />
        <SelectResolution />
        <div className="ml-4 uppercase text-sm">{symbol.identifier}</div>
      </div>
    </div>
  );
};

export default ChartHeader;
