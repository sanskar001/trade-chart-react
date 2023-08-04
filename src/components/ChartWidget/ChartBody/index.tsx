import React, { useState, useEffect, useContext } from "react";
import Chart from "./Chart";
import { ChartContext } from "@/store/chart-context";
import { datafeed } from "@/repo/datafeed";
import Loader from "@/theme/Loader";
import { CandleList } from "@ChartWidget/type";

const ChartBody: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { symbol, resolution, chartType } = useContext(ChartContext);
  const [historyData, setHistoryData] = useState<CandleList>([]);

  useEffect(() => {
    setLoading(true);
    datafeed.getHistory(
      symbol,
      resolution,
      (val) => {
        setHistoryData(val);
        setLoading(false);
      },
      (err) => {
        alert(err.message);
        setLoading(false);
      }
    );
  }, [symbol, resolution]);

  return (
    <div className="flex-1 overflow-hidden relative">
      <div className="absolute top-0 left-0 p-2 text-sm uppercase bg-white z-[50]">
        <p className="font-medium">
          {symbol.identifier} &middot; {resolution}
        </p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <Chart historyData={historyData} chartType={chartType} />
      )}
    </div>
  );
};

export default ChartBody;
