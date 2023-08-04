import React, { useRef, useEffect } from "react";
import { CandleList, ChartType } from "@ChartWidget/type";
import { TradeChart } from "@/services/chart/chart.service";

interface ChartProps {
  historyData: CandleList;
  chartType: ChartType;
}

let tradeChart: TradeChart;

const Chart: React.FC<ChartProps> = ({ historyData }) => {
  const chartContainerRef =
    useRef<HTMLElement>() as React.MutableRefObject<HTMLElement>;

  useEffect(() => {
    tradeChart = new TradeChart(chartContainerRef.current);
    tradeChart.setVolumeSeriesData(historyData);
  }, []);

  return (
    <div
      ref={chartContainerRef as React.LegacyRef<HTMLDivElement>}
      className="h-full w-full"
    ></div>
  );
};

export default Chart;
