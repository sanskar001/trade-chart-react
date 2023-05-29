import React, { useState, useEffect } from "react";
import SymbolSearch from "../SymbolSearch";

const ChartHeader: React.FC = () => {
  const [symbol, setSymbol] = useState<string>("");

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
