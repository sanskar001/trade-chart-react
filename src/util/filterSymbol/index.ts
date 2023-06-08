import { SymbolListType } from "@/components/ChartWidget/type";
import { TradeType } from "@/components/ChartWidget/SelectSymbol/SymbolSearch/SymbolFilter";

export const filterSymbol = (
  symbolList: SymbolListType,
  tradeType: TradeType,
  searchValue: string
) => {
  return symbolList
    .filter((symbol) =>
      tradeType === TradeType.all ? true : symbol.tradeType === tradeType
    )
    .filter((symbol) => symbol.identifier.includes(searchValue.toLowerCase()));
};
