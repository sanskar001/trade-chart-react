import { Time } from "lightweight-charts";

export interface CandleDataType {
  time: Time;
  open: number;
  close: number;
  high: number;
  low: number;
}

export type CandleSeriesDataType = Array<CandleDataType>;
