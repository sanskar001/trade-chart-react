import React from "react";
import Chart from "./Chart";
import { ChartWidgetOptionsType } from "./type";
import ChartHeader from "./ChartHeader";

interface ChartWidgetType {
  options: ChartWidgetOptionsType;
}

const ChartWidget: React.FC<ChartWidgetType> = ({ options }) => {
  return (
    <div
      id="chart-widget"
      style={options.style}
      className="max-w-[100vw] max-h-[100vh] flex flex-col border border-linen-orange relative"
    >
      <ChartHeader />
      <Chart />
    </div>
  );
};

export default ChartWidget;
