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
import { CandleList, ChartContainer } from "./type";

export class TradeChart {
  private readonly instance: IChartApi;

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

  private createCandleSeries() {
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
}
