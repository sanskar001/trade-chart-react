import { Time } from "lightweight-charts";

type Price = number;
export interface Candle {
  time: Time;
  low: Price;
  high: Price;
  open: Price;
  close: Price;
  volume?: Price;
}

export type CandleList = Array<Candle>;
export type ChartContainer = string | HTMLElement;
