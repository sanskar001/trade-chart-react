import { createContext } from "react";
import { ChartContextType } from "./type";

const defaultValue: ChartContextType = {
  symbol: "",
  setSymbol: (_symbol) => undefined,
};

export const ChartContext = createContext(defaultValue);
