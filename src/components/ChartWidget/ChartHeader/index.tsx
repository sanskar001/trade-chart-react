import React, { useContext, useEffect } from "react";
import SelectSymbol from "../SelectSymbol";
import { ChartContext } from "@/store/chart-context";

const ChartHeader: React.FC = () => {
  const chartCtx = useContext(ChartContext);

  useEffect(() => {
    console.log("Chart Header symbol:", chartCtx.symbol);
  }, []);

  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center gap-2 p-[2px]">
        <SelectSymbol />
      </div>
    </div>
  );
};

export default ChartHeader;
