import { SymbolType } from "@ChartWidget/type";

export interface ChartContextType {
  symbol: string;
  setSymbol: (_symbol: string) => void;
}

export interface ChartProviderProps {
  defaultSymbol: SymbolType;
  children: React.ReactNode;
}
