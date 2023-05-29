export interface SymbolType {
  identifier: string;
  product: string;
  optionType: string;
}

export type SymbolListType = Array<SymbolType>;

export interface SymbolListProps {
  symbolList: SymbolListType;
  onSelect: (_val: SymbolType) => void;
}
