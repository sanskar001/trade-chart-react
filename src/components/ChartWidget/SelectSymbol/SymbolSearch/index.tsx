import React, { useEffect, useMemo, useCallback, useState } from "react";
import Loader from "@/theme/Loader";
import SearchField from "@/theme/SearchField";
import SymbolFilter, { TradeType } from "./SymbolFilter";
import SymbolGroup from "./SymbolGroup";
import { datafeed } from "@/repo/datafeed";
import { filterSymbol } from "@/util/filterSymbol";
import { SymbolListType, SymbolType } from "@ChartWidget/type";

interface SymbolSearchProps {
  product: string;
  onSelectSymbol: (_symbol: SymbolType) => void;
}

const SymbolSearch: React.FC<SymbolSearchProps> = ({
  product,
  onSelectSymbol,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [tradeType, setTradeType] = useState<TradeType>(TradeType.all);
  const [symbolList, setSymbolList] = useState<SymbolListType>([]);

  const getSymbolHandler = useCallback(() => {
    setLoading(true);

    datafeed.getSymbols(
      product,
      (val) => {
        setSymbolList(val);
        setLoading(false);
      },
      (err) => {
        alert(err.message);
        setLoading(false);
      }
    );
  }, []);

  useEffect(getSymbolHandler, []);

  const filteredSymbolList: SymbolListType = useMemo(
    filterSymbol.bind(null, symbolList, tradeType, searchValue),
    [symbolList, searchValue, tradeType]
  );

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
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <SymbolGroup
          symbolList={filteredSymbolList}
          onSelect={(val) => onSelectSymbol(val)}
        />
      )}
    </div>
  );
};

export default SymbolSearch;

// -------------------------------------------------------------------------
