import { ISeriesApi, Time } from "lightweight-charts";

type Price = number;

export interface CandleStick {
  time: Time;
  low: Price;
  high: Price;
  open: Price;
  close: Price;
}

export interface Point {
  time: Time;
  value: Price;
}

export interface Candle extends CandleStick {
  volume?: Price;
}

export type CandleList = Array<Candle>;
export type ChartContainer = string | HTMLElement;
export type ChartType = "candle" | "line" | "area";
export type SeriesApi = ISeriesApi<"Area" | "Line" | "Candlestick">;

// eslint-disable-next-line
export type GetCandleStickData = (data: CandleList) => CandleStick[];
// eslint-disable-next-line
export type GetLineData = (data: CandleList) => Point[];
// eslint-disable-next-line
export type GetAreaData = (data: CandleList) => Point[];
