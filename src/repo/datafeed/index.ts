import { Datafeed, SymbolListType } from "@ChartWidget/type";
import mockProductData from "@/mocks/product-data.json";
import { mockSymbolData } from "@/mocks/symbol-data";

export const mockDatafeed: Datafeed = {
  getProducts: () => {
    const productList = mockProductData.data.map((product) =>
      product.Value.toLowerCase()
    );
    return productList;
  },
  getSymbols: (product) => {
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
    return symbolList as SymbolListType;
  },
};
