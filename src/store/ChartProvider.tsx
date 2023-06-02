import React, { useState } from "react";
import { ChartContext } from "./chart-context";
import { SymbolType } from "@ChartWidget/type";
import { ChartContextType, ChartProviderProps } from "./type";

const ChartProvider: React.FC<ChartProviderProps> = ({
  children,
  defaultSymbol,
}) => {
  const [symbol, setSymbol] = useState<SymbolType>(defaultSymbol);

  const chartContext: ChartContextType = {
    symbol: symbol,
    setSymbol: (sym) => setSymbol(sym),
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
