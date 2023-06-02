import { createContext } from "react";
import { ChartContextType } from "./type";

const defaultValue: ChartContextType = {
  symbol: "",
  setSymbol: (_symbol) => undefined, // eslint-disable-line @typescript-eslint/no-unused-vars
};

export const ChartContext = createContext(defaultValue);
