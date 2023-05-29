import React from "react";
import classes from "./SymbolList.module.css";
import { SymbolListProps } from "./type";

const optionType: Record<string, string> = {
  CE: "#26a69a35",
  PE: "#EF535035",
};

const SymbolList: React.FC<SymbolListProps> = ({ symbolList, onSelect }) => {
  return (
    <div className={classes.symbol_list}>
      {symbolList.map((symbol) => {
        return (
          <div
            key={symbol.identifier}
            className={classes.symbol_item}
            onClick={onSelect.bind(null, symbol.identifier)}
          >
            <h6>{symbol.product}</h6>
            <div>{symbol.identifier}</div>
            {Object.keys(optionType).includes("CE") && (
              <span
                className={classes.option_type}
                style={{ backgroundColor: optionType[symbol.optionType] }}
              >
                {symbol.optionType}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SymbolList;
