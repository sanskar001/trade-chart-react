import React, { useMemo, useState } from "react";
import SearchField from "@/theme/SearchField";
import SymbolFilter, { TradeType } from "./SymbolFilter";
import SymbolGroup from "./SymbolGroup";
import { mockDatafeed } from "@/repo/datafeed";
import { SymbolListType, SymbolType } from "@ChartWidget/type";

interface SymbolSearchProps {
  product: string;
  onSelectSymbol: (_symbol: SymbolType) => void;
}

const SymbolSearch: React.FC<SymbolSearchProps> = ({
  product,
  onSelectSymbol,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [tradeType, setTradeType] = useState<TradeType>(TradeType.all);

  const symbolList: SymbolListType = useMemo(
    () => mockDatafeed.getSymbols(product),
    []
  );

  const filteredSymbolList: SymbolListType = useMemo(() => {
    return symbolList
      .filter((symbol) =>
        tradeType === TradeType.all ? true : symbol.tradeType === tradeType
      )
      .filter((symbol) =>
        symbol.identifier.includes(searchValue.toLowerCase())
      );
  }, [symbolList, searchValue, tradeType]);

  return (
    <div className="h-full flex flex-col">
      <SearchField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SymbolFilter
        selectedValue={tradeType}
        onSelect={(val) => setTradeType(val)}
      />
      <SymbolGroup
        symbolList={filteredSymbolList}
        onSelect={(val) => onSelectSymbol(val)}
      />
    </div>
  );
};

export default SymbolSearch;

// -------------------------------------------------------------------------
