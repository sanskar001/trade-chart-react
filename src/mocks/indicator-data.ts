import { Time } from "lightweight-charts";
import tradeData from "./trade-data.json";

interface IndicatorData {
  time: Time;
  value: number;
}

export const fetchIndiciatorData = () => {
  const myIndicatorData: IndicatorData[] = tradeData.map((trade) => {
    return {
      time: trade.time as Time,
      value: trade.close + Math.random() * 20,
    };
  });
  myIndicatorData.reverse();
  return myIndicatorData;
};
