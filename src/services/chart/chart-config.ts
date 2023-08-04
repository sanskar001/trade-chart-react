import {
  AreaStyleOptions,
  CandlestickStyleOptions,
  ChartOptions,
  DeepPartial,
  HistogramStyleOptions,
  LineStyleOptions,
  PriceScaleOptions,
  SeriesOptionsCommon,
} from "lightweight-charts";

export const Colors: { [key: string]: string } = {
  tealGreen: "#26a69a70",
  plumRed: "#ef535070",
};

export const chartOptions: DeepPartial<ChartOptions> = {
  rightPriceScale: {
    borderVisible: false,
  },
  leftPriceScale: {
    borderVisible: false,
  },
  timeScale: {
    borderVisible: false,
    timeVisible: true,
    secondsVisible: true,
  },
  grid: {
    horzLines: {
      color: "#d6dcde70",
    },
    vertLines: {
      color: "#d6dcde70",
    },
  },
};

export const volumeSeriesOption: DeepPartial<
  HistogramStyleOptions & SeriesOptionsCommon
> = {
  color: "#26a69a",
  priceFormat: {
    type: "volume",
  },
  priceScaleId: "",
};

export const volumePriceScaleOption: DeepPartial<PriceScaleOptions> = {
  scaleMargins: {
    top: 0.8,
    bottom: 0,
  },
};

export const mainPriceScaleOption: DeepPartial<PriceScaleOptions> = {
  scaleMargins: {
    top: 0.05,
    bottom: 0.15,
  },
};

export const lineSeriesOption: DeepPartial<
  LineStyleOptions & SeriesOptionsCommon
> = { color: "#2962FF" };

export const candleStickSeriesOption: DeepPartial<
  CandlestickStyleOptions & SeriesOptionsCommon
> = {
  upColor: "#26a69a",
  downColor: "#ef5350",
  borderVisible: false,
  wickUpColor: "#26a69a",
  wickDownColor: "#ef5350",
};

export const areaSeriesOption: DeepPartial<
  AreaStyleOptions & SeriesOptionsCommon
> = {
  lineColor: "#2962FF",
  topColor: "#2962FF",
  bottomColor: "rgba(41, 98, 255, 0.28)",
};
