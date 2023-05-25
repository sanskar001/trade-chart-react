import React from "react";
import "./global.css";
import ChartWidget from "@components/ChartWidget";
import { ChartWidgetOptionsType } from "@ChartWidget/type";

const chartWidgetOptions: ChartWidgetOptionsType = {
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
