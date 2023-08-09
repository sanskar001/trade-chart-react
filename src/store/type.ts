import {
  ChartType,
  Indicator,
  Resolution,
  SymbolType,
} from "@ChartWidget/type";

export interface ChartContextType {
  symbol: SymbolType;
  resolution: Resolution;
  chartType: ChartType;
  indicators: Indicator[];
  setSymbol: (_symbol: SymbolType) => void;
  setResolution: (_resolution: Resolution) => void;
  setChartType: (_chartType: ChartType) => void;
  addIndicator: (_indicator: Indicator) => void;
}

export interface ChartProviderProps {
  defaultSymbol: SymbolType;
  children: React.ReactNode;
}
