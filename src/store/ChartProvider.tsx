import React, { useEffect, useState } from "react";
import { ChartContext } from "./chart-context";
import { ChartType, Resolution, SymbolType } from "@ChartWidget/type";
import { ChartContextType, ChartProviderProps } from "./type";
import { fetchLocalStoreState, setLocalStoreState } from "@/util/localStorage";

const localState = fetchLocalStoreState();

const ChartProvider: React.FC<ChartProviderProps> = ({
  children,
  defaultSymbol,
}) => {
  const [symbol, setSymbol] = useState<SymbolType>(defaultSymbol);
  const [resolution, setResolution] = useState<Resolution>(
    localState?.resolution || "1D"
  );
  const [chartType, setChartType] = useState<ChartType>(
    localState?.chartType || "candle"
  );

  useEffect(() => {
    setLocalStoreState({ resolution, chartType });
  }, [resolution, chartType]);

  const chartContext: ChartContextType = {
    resolution: resolution,
    symbol: symbol,
    chartType: chartType,
    setSymbol: (sym) => setSymbol(sym),
    setResolution: (res) => setResolution(res),
    setChartType: (res) => setChartType(res),
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
