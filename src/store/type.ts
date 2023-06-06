import { Resolution, SymbolType } from "@ChartWidget/type";

export interface ChartContextType {
  symbol: SymbolType;
  resolution: Resolution;
  setSymbol: (_symbol: SymbolType) => void;
  setResolution: (_resolution: Resolution) => void;
}

export interface ChartProviderProps {
  defaultSymbol: SymbolType;
  children: React.ReactNode;
}
