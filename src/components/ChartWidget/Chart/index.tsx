import React, { useRef, useEffect } from "react";
import {
  ChartOptions,
  DeepPartial,
  Time,
  createChart,
} from "lightweight-charts";
import stockData from "@/mocks/trade-data.json";
import { CandleSeriesDataType } from "./type";

const Chart: React.FC = () => {
  const chartContainerRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLElement>;

  useEffect(() => {
    const chartOptions: DeepPartial<ChartOptions> = {
      rightPriceScale: {
        borderVisible: false,
      },
      leftPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: true,
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);

    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    const updatedStockData: CandleSeriesDataType = stockData.map((candle) => {
      return {
        time: candle.time as Time,
        open: candle.open,
        close: candle.close,
        high: candle.high,
        low: candle.low,
      };
    });
    updatedStockData.reverse();

    candlestickSeries.setData(updatedStockData);

    // AutoSizing chartWidget
    window.addEventListener("resize", () => {
      const { clientWidth, clientHeight } = chartContainerRef.current;
      chart.resize(clientWidth, clientHeight);
    });
  }, []);

  return (
    <div
      ref={chartContainerRef as React.LegacyRef<HTMLDivElement>}
      className="flex-1 overflow-hidden"
    ></div>
  );
};

export default Chart;
