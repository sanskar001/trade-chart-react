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
  CandleStick,
  ChartContainer,
  ChartData,
  ChartSeries,
  ChartType,
  Point,
  SeriesApi,
} from "./type";

export class TradeChart {
  private readonly instance: IChartApi;
  private activeSeries: SeriesApi;

  constructor(container: ChartContainer) {
    this.instance = createChart(container, chartOptions);

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
    const chartSeries: ChartSeries = {
      candle: this.createCandleStickSeries.bind(this),
      line: this.createLineSeries.bind(this),
      area: this.createAreaSeries.bind(this),
    };
    return chartSeries[chartType]();
  }

  private getCandleStickData(data: CandleList): CandleStick[] {
    const seriesData = data.map((candle) => ({
      open: candle.open,
      high: candle.high,
      low: candle.low,
      close: candle.close,
      time: candle.time,
    }));
    return seriesData;
  }

  private getLineData(data: CandleList): Point[] {
    const seriesData = data.map((candle) => ({
      value: candle.close,
      time: candle.time,
    }));
    return seriesData;
  }

  private getAreaData(data: CandleList): Point[] {
    const seriesData = data.map((candle) => ({
      value: candle.close,
      time: candle.time,
    }));
    return seriesData;
  }

  private parseChartData(chartType: ChartType, data: CandleList) {
    const chartData: ChartData = {
      candle: this.getCandleStickData,
      line: this.getLineData,
      area: this.getAreaData,
    };
    return chartData[chartType](data);
  }

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
    this.activeSeries && this.instance.removeSeries(this.activeSeries);
    this.activeSeries = this.createSeries(chartType);
    this.activeSeries.setData(this.parseChartData(chartType, data));
  }
}
