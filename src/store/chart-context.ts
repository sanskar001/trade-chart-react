import { createContext } from "react";
import { ChartContextType } from "./type";

const defaultValue: ChartContextType = {
  symbol: {
    identifier: "",
    product: "",
    tradeType: "OPTSTK",
    optionType: "CE",
  },
  resolution: "1D",

  /* eslint-disable */
  setResolution: (_res) => undefined,
  setSymbol: (_symbol) => undefined,
};

export const ChartContext = createContext(defaultValue);
