import React, { useState } from "react";
import { ChartContext } from "./chart-context";
import { Resolution, SymbolType } from "@ChartWidget/type";
import { ChartContextType, ChartProviderProps } from "./type";

const ChartProvider: React.FC<ChartProviderProps> = ({
  children,
  defaultSymbol,
}) => {
  const [symbol, setSymbol] = useState<SymbolType>(defaultSymbol);
  const [resolution, setResolution] = useState<Resolution>("1D");

  const chartContext: ChartContextType = {
    resolution: resolution,
    symbol: symbol,
    setSymbol: (sym) => setSymbol(sym),
    setResolution: (res) => setResolution(res),
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
