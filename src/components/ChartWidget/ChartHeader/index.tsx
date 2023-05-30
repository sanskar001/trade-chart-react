import React, { useState } from "react";
import SymbolSearch from "../SymbolSearch";
import { SymbolType } from "../SymbolSearch/SymbolList/type";

const initialSymbol: SymbolType = {
  identifier: "FUTSTK_RELIANCE_15JUL2021_XX_4200",
  product: "RELIANCE",
  optionType: "XX",
  tradeType: "FUTSTK",
};

const ChartHeader: React.FC = () => {
  const [symbol, setSymbol] = useState<SymbolType>(initialSymbol);

  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center gap-2 p-[2px]">
        <SymbolSearch
          setSymbol={(val) => setSymbol(val)}
          selectedSymbol={symbol}
        />
        <div>{symbol.identifier}</div>
      </div>
    </div>
  );
};

export default ChartHeader;
