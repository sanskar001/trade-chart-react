import React, { useRef, useEffect } from "react";
import { CandleList, ChartType } from "@ChartWidget/type";
import { TradeChart } from "@/services/chart/chart.service";

interface ChartProps {
  historyData: CandleList;
  chartType: ChartType;
}

export let tradeChart: TradeChart;

const Chart: React.FC<ChartProps> = ({ historyData, chartType }) => {
  const chartContainerRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLElement>;

  useEffect(() => {
    tradeChart = new TradeChart(chartContainerRef.current);
    tradeChart.setVolumeSeriesData(historyData);
  }, []);

  useEffect(() => {
    tradeChart.loadChart(chartType, historyData);
  }, [chartType]);

  return (
    <div
      ref={chartContainerRef as React.LegacyRef<HTMLDivElement>}
      className="h-full w-full"
    ></div>
  );
};

export default Chart;
