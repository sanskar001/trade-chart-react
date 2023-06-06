import React from "react";
import { OptionType, SymbolType } from "@ChartWidget/type";

// eslint-disable-next-line
const optionTypeBg: { [key in Exclude<OptionType, "XX" | "FF">]: string } = {
  CE: "#26A69A35",
  PE: "#EF535035",
};

interface SymbolGroup {
  symbolList: SymbolType[];
}

const SymbolGroup: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-5 h-[40px] grid grid-cols-[auto_1fr_auto] gap-4 items-center uppercase border-b border-b-alice-blue hover:bg-alice-blue last:border-b-0">
        <h6 className="w-[130px] text-royal-blue text-truncate">
          RELIANCE COR
        </h6>
        <p className="text-truncate">FUTSTK_RELIANCE_15JUL2021_XX_4200</p>
        <span
          className="px-1 rounded-sm font-medium"
          style={{ backgroundColor: optionTypeBg["CE"] }}
        >
          CE
        </span>
      </div>
    </div>
  );
};

export default SymbolGroup;
