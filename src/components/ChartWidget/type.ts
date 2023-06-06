export type Product = string;

export type ProductList = Array<Product>;

type GetProductsHandler = () => ProductList;

export interface Datafeed {
  getProducts: GetProductsHandler;
}

export type OptionType = "CE" | "PE" | "XX" | "FF";
export type TradeType = "FUTIDX" | "FUTSTK" | "OPTSTK" | "OPTIDX";

export interface SymbolType {
  identifier: string;
  product: string;
  tradeType: TradeType;
  optionType: OptionType;
}

export interface ChartWidgetOptionsType {
  symbol: SymbolType;
  datafeed?: Datafeed;
  style?: React.CSSProperties;
  other?: string;
}
