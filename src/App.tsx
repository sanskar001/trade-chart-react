import React from "react";
import "./global.css";
import ChartWidget from "@components/ChartWidget";
import { ChartWidgetOptionsType } from "@ChartWidget/type";
import { datafeed } from "@/repo/datafeed";

const chartWidgetOptions: ChartWidgetOptionsType = {
  symbol: {
    identifier: "FUTSTK_RELIANCE_15JUL2021_XX_4200",
    product: "RELIANCE",
    tradeType: "FUTSTK",
    optionType: "XX",
  },
  datafeed: datafeed,
  style: {
    width: "100%",
    maxWidth: "1000px",
    height: "650px",
  },
  other: "Something",
};

const App: React.FC = () => {
  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      <ChartWidget options={chartWidgetOptions} />
    </div>
  );
};

export default App;
