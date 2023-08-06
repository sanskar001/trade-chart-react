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
  profitGreen: "#26a69a",
  lossRed: "#ef5350",
  profitGreenLight: "#26a69a70",
  lossRedLight: "#ef535070",
  gridGray: "#d6dcde70",
  darkBlue: "#2962ff",
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
      color: Colors.gridGray,
    },
    vertLines: {
      color: Colors.gridGray,
    },
  },
};

export const volumeSeriesOption: DeepPartial<
  HistogramStyleOptions & SeriesOptionsCommon
> = {
  color: Colors.profitGreen,
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
    bottom: 0.1,
  },
};

export const lineSeriesOption: DeepPartial<
  LineStyleOptions & SeriesOptionsCommon
> = { color: Colors.darkBlue, lineWidth: 2 };

export const candleStickSeriesOption: DeepPartial<
  CandlestickStyleOptions & SeriesOptionsCommon
> = {
  borderVisible: false,
  upColor: Colors.profitGreen,
  downColor: Colors.lossRed,
  wickUpColor: Colors.profitGreen,
  wickDownColor: Colors.lossRed,
};

export const areaSeriesOption: DeepPartial<
  AreaStyleOptions & SeriesOptionsCommon
> = {
  lineColor: Colors.darkBlue,
  lineWidth: 2,
  topColor: Colors.darkBlue + "66",
  bottomColor: Colors.darkBlue + "00",
};
