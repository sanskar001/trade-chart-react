import React, { useContext } from "react";
import Chart from "./Chart";
import { ChartContext } from "@/store/chart-context";

const ChartBody: React.FC = () => {
  const { symbol, resolution } = useContext(ChartContext);

  return (
    <div className="flex-1 overflow-hidden relative">
      <div className="absolute top-0 left-0 p-2 text-sm uppercase bg-white z-[50]">
        <p className="font-medium">
          {symbol.identifier} &middot; {resolution}
        </p>
      </div>
      <Chart />
    </div>
  );
};

export default ChartBody;
