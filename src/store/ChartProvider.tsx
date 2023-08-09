import React, { useEffect, useState } from "react";
import { ChartContext } from "./chart-context";
import {
  ChartType,
  Indicator,
  Resolution,
  SymbolType,
} from "@ChartWidget/type";
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
  const [indicators, setIndicators] = useState<Indicator[]>([]);

  useEffect(() => {
    setLocalStoreState({ resolution, chartType });
  }, [resolution, chartType]);

  const addIndicatorHandler = (indicator: Indicator) => {
    setIndicators((preState) => {
      return [...preState, indicator];
    });
  };

  const removeIndicatorHandler = (indicator: Indicator) => {
    const updatedIndicators = indicators.filter(
      (ind) => ind.value !== indicator.value
    );
    setIndicators(updatedIndicators);
  };

  const chartContext: ChartContextType = {
    resolution: resolution,
    symbol: symbol,
    chartType: chartType,
    indicators: indicators,
    setSymbol: (sym) => setSymbol(sym),
    setResolution: (res) => setResolution(res),
    setChartType: (res) => setChartType(res),
    addIndicator: addIndicatorHandler,
    removeIndicator: removeIndicatorHandler,
  };

  return (
    <ChartContext.Provider value={chartContext}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
