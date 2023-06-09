import React from "react";
import ChartBody from "./ChartBody";
import ChartHeader from "./ChartHeader";
import ChartFooter from "./ChartFooter";
import ChartProvider from "@/store/ChartProvider";
import { ChartWidgetOptionsType } from "./type";

interface ChartWidgetType {
  options: ChartWidgetOptionsType;
}

const ChartWidget: React.FC<ChartWidgetType> = ({ options }) => {
  return (
    <ChartProvider defaultSymbol={options.symbol}>
      <div
        id="chart-widget"
        style={options.style}
        className="max-w-[80vw] max-h-[100vh] flex flex-col border border-linen-orange relative"
      >
        <ChartHeader />
        <ChartBody />
        <ChartFooter />
      </div>
    </ChartProvider>
  );
};

export default ChartWidget;
