import React, { useRef, useEffect } from "react";
import { ChartOptions, DeepPartial, createChart } from "lightweight-charts";
import { CandleList } from "@ChartWidget/type";

interface ChartProps {
  historyData: CandleList;
}

const Chart: React.FC<ChartProps> = ({ historyData }) => {
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

    candlestickSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.05, // highest point of the series will be 10% away from the top
        bottom: 0.15, // lowest point will be 40% away from the bottom
      },
    });

    candlestickSeries.setData(historyData);

    const volumeSeries = chart.addHistogramSeries({
      color: "#26a69a",
      priceFormat: {
        type: "volume",
      },
      priceScaleId: "",
    });

    volumeSeries.priceScale().applyOptions({
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
    });

    const volumeSeriesData = historyData.map((candle) => {
      return {
        time: candle.time,
        value: candle.volume,
        color: candle.open <= candle.close ? "#26a69a70" : "#ef535070",
      };
    });

    volumeSeries.setData(volumeSeriesData);

    // AutoSizing chartWidget
    window.addEventListener("resize", () => {
      if (chartContainerRef.current) {
        const { clientWidth, clientHeight } = chartContainerRef.current;
        chart.resize(clientWidth, clientHeight);
      }
    });
  }, []);

  return (
    <div
      ref={chartContainerRef as React.LegacyRef<HTMLDivElement>}
      className="h-full w-full"
    ></div>
  );
};

export default Chart;
