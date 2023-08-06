import { ChartType, Resolution } from "@/components/ChartWidget/type";

export interface LocalStorageState {
  resolution: Resolution;
  chartType: ChartType;
}

export const setLocalStoreState = (state: LocalStorageState) => {
  localStorage.setItem("tradeChart", JSON.stringify(state));
};

export const fetchLocalStoreState = () => {
  return JSON.parse(localStorage.getItem("tradeChart") as string);
};
