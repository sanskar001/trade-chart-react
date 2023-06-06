import React, { useContext, useEffect } from "react";
import SelectSymbol from "../SelectSymbol";
import { ChartContext } from "@/store/chart-context";
import SelectResolution from "../SelectResolution";

const ChartHeader: React.FC = () => {
  const chartCtx = useContext(ChartContext);

  useEffect(() => {
    console.log("Chart Header symbol:", chartCtx.symbol);
  }, []);

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
