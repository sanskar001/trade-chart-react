import React, { useState } from "react";
import SearchField from "@/theme/SearchField";
import SymbolFilter, { TradeType } from "./SymbolFilter";
import SymbolGroup from "./SymbolGroup";

interface SymbolSearchProps {
  product: string;
}

const SymbolSearch: React.FC<SymbolSearchProps> = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [tradeType, setTradeType] = useState<TradeType>(TradeType.all);

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
      <SymbolGroup />
    </div>
  );
};

export default SymbolSearch;

// -------------------------------------------------------------------------
