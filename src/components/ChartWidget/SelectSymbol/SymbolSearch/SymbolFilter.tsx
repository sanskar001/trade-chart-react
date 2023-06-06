import React from "react";
import RadioTag from "@/theme/RadioTag";

/* eslint-disable */
export const enum TradeType {
  all = "all",
  FUTSTK = "FUTSTK",
  FUTIDX = "FUTIDX",
  OPTSTK = "OPTSTK",
  OPTIDX = "OPTIDX",
}

/* eslint-enable */
type FilterOptions = Array<TradeType>;

const filterOptions: FilterOptions = [
  TradeType.all,
  TradeType.FUTSTK,
  TradeType.FUTIDX,
  TradeType.OPTSTK,
  TradeType.OPTIDX,
];

interface SymbolFilterProps {
  selectedValue: TradeType;
  onSelect: (_val: TradeType) => void;
}

const SymbolFilter: React.FC<SymbolFilterProps> = ({
  selectedValue,
  onSelect,
}) => {
  return (
    <div className="px-5 py-3 flex items-center flex-wrap gap-2">
      {filterOptions.map((option) => {
        return (
          <RadioTag
            key={option}
            name="symbol-filter"
            value={option}
            label={option.toUpperCase()}
            checked={option === selectedValue}
            onChange={onSelect.bind(null, option)}
          />
        );
      })}
    </div>
  );
};

export default SymbolFilter;
