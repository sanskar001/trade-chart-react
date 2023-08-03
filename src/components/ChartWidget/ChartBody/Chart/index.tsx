import React, { useRef, useEffect } from "react";
import {
  ChartOptions,
  DeepPartial,
  IChartApi,
  // ISeriesApi,
  // SeriesOptionsMap,
  createChart,
} from "lightweight-charts";
import { CandleList, ChartType } from "@ChartWidget/type";

interface ChartProps {
  historyData: CandleList;
  chartType: ChartType;
}

const Chart: React.FC<ChartProps> = ({ historyData, chartType }) => {
  const chartContainerRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLElement>;
  const chartRef = useRef<IChartApi>();
  // const activeSeries = useRef<ISeriesApi<keyof SeriesOptionsMap>>();

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
      grid: {
        horzLines: {
          color: "#d6dcde70",
        },
        vertLines: {
          color: "#d6dcde70",
        },
      },
    };

    const chart = createChart(chartContainerRef.current, chartOptions);

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

    chartRef.current = chart;

    // AutoSizing chartWidget
    window.addEventListener("resize", () => {
      if (chartContainerRef.current) {
        const { clientWidth, clientHeight } = chartContainerRef.current;
        chart.resize(clientWidth, clientHeight);
      }
    });
  }, []);

  const applyChartType = (chartType: ChartType) => {
    if (chartRef.current) {
      switch (chartType) {
        case "candle":
          {
            const candlestickSeries = chartRef.current.addCandlestickSeries({
              upColor: "#26a69a",
              downColor: "#ef5350",
              borderVisible: false,
              wickUpColor: "#26a69a",
              wickDownColor: "#ef5350",
            });

            candlestickSeries.priceScale().applyOptions({
              scaleMargins: {
                top: 0.05,
                bottom: 0.15,
              },
            });

            candlestickSeries.setData(historyData);
          }
          break;
        case "line":
          {
            const lineSeries = chartRef.current.addLineSeries({
              color: "#2962FF",
            });

            lineSeries.priceScale().applyOptions({
              scaleMargins: {
                top: 0.05,
                bottom: 0.15,
              },
            });

            const lineSeriesData = historyData.map((candle) => {
              return {
                time: candle.time,
                value: candle.close,
              };
            });

            lineSeries.setData(lineSeriesData);
          }
          break;
        case "area":
          {
            const areaSeries = chartRef.current.addAreaSeries({
              lineColor: "#2962FF",
              topColor: "#2962FF",
              bottomColor: "rgba(41, 98, 255, 0.28)",
            });

            areaSeries.priceScale().applyOptions({
              scaleMargins: {
                top: 0.05,
                bottom: 0.15,
              },
            });

            const areaSeriesData = historyData.map((candle) => {
              return {
                time: candle.time,
                value: candle.close,
              };
            });

            areaSeries.setData(areaSeriesData);
          }
          break;
      }
    }
  };

  useEffect(() => {
    applyChartType(chartType);
  }, [chartType]);

  return (
    <div
      ref={chartContainerRef as React.LegacyRef<HTMLDivElement>}
      className="h-full w-full"
    ></div>
  );
};

export default Chart;
