import { SymbolType } from "@ChartWidget/type";

export interface ChartContextType {
  symbol: SymbolType;
  setSymbol: (_symbol: SymbolType) => void;
}

export interface ChartProviderProps {
  defaultSymbol: SymbolType;
  children: React.ReactNode;
}
