import React, { useState, useEffect } from "react";
import ChartWidget from "@components/ChartWidget";
import { ChartWidgetOptionsType } from "@ChartWidget/type";
import { datafeed } from "@/repo/datafeed";
import "./global.css";

const chartWidgetOptions: ChartWidgetOptionsType = {
  symbol: {
    identifier: "OPTSTK_RELIANCE_29JUN2023_PE_2740",
    product: "RELIANCE",
    tradeType: "OPTSTK",
    optionType: "PE",
  },
  datafeed: datafeed,
  style: {
    width: "100%",
    maxWidth: "1200px",
    height: "750px",
  },
  other: "Something",
};

const App: React.FC = () => {
  const [auth, setAuth] = useState<boolean>(false);

  useEffect(() => {
    setAuth(true);
  }, []);

  return (
    <div className="min-h-[100vh] flex items-center justify-center">
      {auth && <ChartWidget options={chartWidgetOptions} />}
      {!auth && <div>Websocket Authenticating...</div>}
    </div>
  );
};

export default App;
