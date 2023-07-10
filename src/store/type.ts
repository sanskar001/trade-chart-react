import { ChartType, Resolution, SymbolType } from "@ChartWidget/type";

export interface ChartContextType {
  symbol: SymbolType;
  resolution: Resolution;
  chartType: ChartType;
  setSymbol: (_symbol: SymbolType) => void;
  setResolution: (_resolution: Resolution) => void;
  setChartType: (_chartType: ChartType) => void;
}

export interface ChartProviderProps {
  defaultSymbol: SymbolType;
  children: React.ReactNode;
}
