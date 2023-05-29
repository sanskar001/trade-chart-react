import React, { useState, useEffect } from "react";
import SymbolSearch from "../SymbolSearch";
import { SymbolType } from "../SymbolSearch/SymbolList/type";

const initialSymbol: SymbolType = {
  identifier: "OPTSTK_RELIANCE_15JUL2021_CE_4200",
  product: "RELIANCE",
  optionType: "CE",
};

const ChartHeader: React.FC = () => {
  const [symbol, setSymbol] = useState<SymbolType>(initialSymbol);

  useEffect(() => {
    console.log("Selected Symbol:", symbol);
  }, [symbol]);

  return (
    <div className="border-b border-linen-orange">
      <div className="h-[40px] bg-white flex items-center gap-2 p-[2px]">
        <SymbolSearch
          setSymbol={(val) => setSymbol(val)}
          selectedSymbol={symbol}
        />
      </div>
    </div>
  );
};

export default ChartHeader;
