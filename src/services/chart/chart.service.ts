import { IChartApi, createChart } from "lightweight-charts";
import {
  Colors,
  areaSeriesOption,
  candleStickSeriesOption,
  chartOptions,
  lineSeriesOption,
  mainPriceScaleOption,
  volumePriceScaleOption,
  volumeSeriesOption,
} from "./chart-config";
import {
  CandleList,
  ChartContainer,
  ChartType,
  GetAreaData,
  GetCandleStickData,
  GetLineData,
  SeriesApi,
} from "./type";

const getCandleStickData: GetCandleStickData = (data) => {
  const seriesData = data.map((candle) => ({
    open: candle.open,
    high: candle.high,
    low: candle.low,
    close: candle.close,
    time: candle.time,
  }));
  return seriesData;
};

const getLineData: GetLineData = (data) => {
  const seriesData = data.map((candle) => ({
    value: candle.close,
    time: candle.time,
  }));
  return seriesData;
};

const getAreaData: GetAreaData = (data) => {
  const seriesData = data.map((candle) => ({
    value: candle.close,
    time: candle.time,
  }));
  return seriesData;
};

const chartData: {
  // eslint-disable-next-line
  [key in ChartType]: GetCandleStickData | GetLineData | GetAreaData;
} = {
  candle: getCandleStickData,
  line: getLineData,
  area: getAreaData,
};

export class TradeChart {
  private readonly instance: IChartApi;
  private activeSeries: SeriesApi;

  constructor(container: ChartContainer, chartType?: ChartType) {
    this.instance = createChart(container, chartOptions);

    this.activeSeries = this.createSeries(chartType || "candle");

    window.addEventListener("resize", () => {
      if (container) {
        const { clientWidth, clientHeight } = container as HTMLElement;
        this.instance.resize(clientWidth, clientHeight);
      }
    });
  }

  private createVolumeSeries() {
    const volumeSeries = this.instance.addHistogramSeries(volumeSeriesOption);
    volumeSeries.priceScale().applyOptions(volumePriceScaleOption);
    return volumeSeries;
  }

  private createCandleStickSeries() {
    const candleStickSeries = this.instance.addCandlestickSeries(
      candleStickSeriesOption
    );
    candleStickSeries.priceScale().applyOptions(mainPriceScaleOption);
    return candleStickSeries;
  }

  private createLineSeries(color?: string) {
    const lineSeries = this.instance.addLineSeries({
      ...lineSeriesOption,
      color: color,
    });
    lineSeries.priceScale().applyOptions(mainPriceScaleOption);
    return lineSeries;
  }

  private createAreaSeries() {
    const areaSeries = this.instance.addAreaSeries(areaSeriesOption);
    areaSeries.priceScale().applyOptions(mainPriceScaleOption);
    return areaSeries;
  }

  private createSeries(chartType: ChartType) {
    // eslint-disable-next-line
    const chartSeries: { [key in ChartType]: SeriesApi } = {
      candle: this.createCandleStickSeries(),
      line: this.createLineSeries(),
      area: this.createAreaSeries(),
    };
    return chartSeries[chartType];
  }

  /*
  private setCandleStickSeriesData(data: CandleList) {
    const candleStickSeriesData = data.map((candle) => {
      return {
        open: candle.open,
        high: candle.high,
        low: candle.low,
        close: candle.close,
        time: candle.time,
      };
    });
    this.createVolumeSeries().setData(candleStickSeriesData);
  }

  private setLineSeriesData(data: CandleList) {
    const lineSeriesData = data.map((candle) => {
      return {
        value: candle.close,
        time: candle.time,
      };
    });
    this.createVolumeSeries().setData(lineSeriesData);
  }

  private setAreaSeriesData(data: CandleList) {
    const areaSeriesData = data.map((candle) => {
      return {
        value: candle.close,
        time: candle.time,
      };
    });
    this.createVolumeSeries().setData(areaSeriesData);
  }
*/

  public setVolumeSeriesData(data: CandleList) {
    const volumeSeriesData = data.map((candle) => {
      return {
        time: candle.time,
        value: candle.volume,
        color: candle.open <= candle.close ? Colors.tealGreen : Colors.plumRed,
      };
    });
    this.createVolumeSeries().setData(volumeSeriesData);
  }

  public loadChart(chartType: ChartType, data: CandleList) {
    this.instance.removeSeries(this.activeSeries);
    this.activeSeries = this.createSeries(chartType);
    this.activeSeries.setData(chartData[chartType](data));
  }
}
