export type OptionType = "CE" | "PE" | "XX" | "FF";
export type TradeType = "FUTIDX" | "FUTSTK" | "OPTSTK" | "OPTIDX";

export interface SymbolType {
  identifier: string;
  product: string;
  tradeType: TradeType;
  optionType: OptionType;
}
export type SymbolListType = Array<SymbolType>;

// --------------------------------------------------------------------------

export type Product = string;
export type ProductList = Array<Product>;

// --------------------------------------------------------------------------

export type Resolution = string;

// --------------------------------------------------------------------------

type ResolveCallback<T> = (_val: T) => void;
type RejectCallback = (_err: Error) => void;

type GetProductsHandler = (
  _resolveCallback: ResolveCallback<ProductList>,
  _rejectCallback: RejectCallback
) => void;

type GetSymbolsHandler = (
  _product: Product,
  _resolveCallback: ResolveCallback<SymbolListType>,
  _rejectCallback: RejectCallback
) => void;

export interface Datafeed {
  getProducts: GetProductsHandler;
  getSymbols: GetSymbolsHandler;
}

// --------------------------------------------------------------------------

export interface ChartWidgetOptionsType {
  symbol: SymbolType;
  datafeed?: Datafeed;
  style?: React.CSSProperties;
  other?: string;
}
