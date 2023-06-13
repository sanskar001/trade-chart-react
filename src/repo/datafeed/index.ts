import { Datafeed } from "@ChartWidget/type";
import { fetchHistory, fetchProducts, fetchSymbols } from "./rest-api";

export const datafeed: Datafeed = {
  getProducts: async (resolveCallback, rejectCallback) => {
    try {
      const productList = await fetchProducts();
      resolveCallback(productList);
    } catch (err: any) {
      rejectCallback(new Error(err));
    }
  },

  getSymbols: async (product, resolveCallback, rejectCallback) => {
    try {
      const symbolList = await fetchSymbols(product);
      resolveCallback(symbolList);
    } catch (err: any) {
      rejectCallback(new Error(err));
    }
  },

  getHistory: async (symbol, resolution, resolveCallback, rejectCallback) => {
    try {
      const historyData = await fetchHistory(symbol, resolution);
      resolveCallback(historyData);
    } catch (err: any) {
      rejectCallback(new Error(err));
    }
  },
};
