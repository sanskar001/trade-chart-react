import { createContext } from "react";
import { ChartContextType } from "./type";

const defaultValue: ChartContextType = {
  symbol: {
    identifier: "",
    product: "",
    tradeType: "OPTSTK",
    optionType: "CE",
  },
  setSymbol: (_symbol) => undefined, // eslint-disable-line @typescript-eslint/no-unused-vars
};

export const ChartContext = createContext(defaultValue);
