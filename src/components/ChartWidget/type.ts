export interface SymbolType {
  identifier: string;
  product: string;
  tradeType: "FUTIDX" | "FUTSTK" | "OPTSTK" | "OPTIDX";
  optionType: "CE" | "PE" | "XX" | "FF";
}

export interface ChartWidgetOptionsType {
  symbol: SymbolType;
  style?: React.CSSProperties;
  other?: string;
}
