import {
  CandleList,
  Product,
  ProductList,
  Resolution,
  SymbolListType,
  SymbolType,
} from "@ChartWidget/type";
import mockProductData from "@/mocks/product-data.json";
import { mockSymbolData } from "@/mocks/symbol-data";
import mockTradeData from "@/mocks/trade-data.json";
// import { suffleArr } from "@/util/suffleArr";

export const fetchProducts = (): Promise<ProductList> => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.9) {
      setTimeout(() => {
        resolve(
          mockProductData.data.map((product) => product.Value.toLowerCase())
        );
      }, 0);
    } else {
      reject("[fetchProduct] Something went wrong!");
    }
  });
};

export const fetchSymbols = (product: Product): Promise<SymbolListType> => {
  const data = mockSymbolData[product.toUpperCase()];
  const symbolList = data
    ? data.map((symbol: any) => {
        return {
          identifier: symbol.Identifier.toLowerCase(),
          product: symbol.Product.toLowerCase(),
          tradeType: symbol.Name.toUpperCase(),
          optionType: symbol.OptionType.toUpperCase(),
        };
      })
    : [];
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.9) {
      setTimeout(() => {
        resolve(symbolList);
      }, 0);
    } else {
      reject("[fetchSymbols] Something went wrong!");
    }
  });
};

export const fetchHistory = (
  symbol: SymbolType,
  resolution: Resolution
): Promise<CandleList> => {
  console.log("fetchHistory", { symbol, resolution });

  const historyData: CandleList = mockTradeData.map((candle) => ({
    time: candle.time,
    open: candle.open,
    close: candle.close,
    low: candle.low,
    high: candle.high,
    volume: candle.volume,
  }));

  // Reverse data
  historyData.reverse();

  return new Promise((resolve, reject) => {
    if (Math.random() < 0.9) {
      setTimeout(() => {
        resolve(historyData);
      }, 0);
    } else {
      reject("[fetchHistory] Something went wrong!");
    }
  });
};
