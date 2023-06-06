import React from "react";
import Ghost from "@/components/SVG/Ghost";
import { SymbolListType, SymbolType } from "@ChartWidget/type";

type OptionTradeType = "CE" | "PE";

// eslint-disable-next-line
const optionTypeBg: { [key in OptionTradeType]: string } = {
  CE: "#26A69A35",
  PE: "#EF535035",
};

interface SymbolGroupProps {
  symbolList: SymbolListType;
  onSelect: (_symbol: SymbolType) => void;
}

const SymbolGroup: React.FC<SymbolGroupProps> = ({ symbolList, onSelect }) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {symbolList.length > 0 ? (
        symbolList.map((symbol, index) => {
          return (
            <div
              key={`sym_${index + 1}`}
              className="px-5 h-[40px] grid grid-cols-[auto_1fr_auto] gap-4 items-center uppercase border-b border-b-alice-blue hover:bg-alice-blue last:border-b-0 cursor-default"
              onClick={onSelect.bind(null, symbol)}
            >
              <h6 className="w-[130px] text-royal-blue text-truncate">
                {symbol.product}
              </h6>
              <p className="text-truncate">{symbol.identifier}</p>
              {Object.keys(optionTypeBg).includes(symbol.optionType) && (
                <span
                  className="px-1 rounded-sm text-sm font-medium"
                  style={{
                    backgroundColor:
                      optionTypeBg[symbol.optionType as OptionTradeType],
                  }}
                >
                  {symbol.optionType}
                </span>
              )}
            </div>
          );
        })
      ) : (
        <div className="h-full flex flex-col gap-2 items-center justify-center">
          <Ghost />
          <p>No symbols match your criteria</p>
        </div>
      )}
    </div>
  );
};

export default SymbolGroup;
