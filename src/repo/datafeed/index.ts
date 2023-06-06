import { Datafeed, SymbolListType } from "@ChartWidget/type";
import mockProductData from "@/mocks/product-data.json";
import mockSymbolData from "@/mocks/symbol-data.json";

export const mockDatafeed: Datafeed = {
  getProducts: () => {
    const productList = mockProductData.data.map((product) => product.Value);
    return productList;
  },
  getSymbols: (product) => {
    console.log(product);
    const data = mockSymbolData.RELIANCE.map((symbol) => {
      return {
        identifier: symbol.Identifier,
        product: symbol.Product,
        tradeType: symbol.Name,
        optionType: symbol.OptionType,
      };
    });
    return data as SymbolListType;
  },
};
