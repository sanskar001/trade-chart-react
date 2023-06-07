import { Product, ProductList, SymbolListType } from "@ChartWidget/type";
import mockProductData from "@/mocks/product-data.json";
import { mockSymbolData } from "@/mocks/symbol-data";

export const fetchProducts = (): Promise<ProductList> => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.7) {
      setTimeout(() => {
        resolve(
          mockProductData.data.map((product) => product.Value.toLowerCase())
        );
      }, 0);
    } else {
      reject("Something went wrong!");
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
    if (Math.random() < 0.7) {
      setTimeout(() => {
        resolve(symbolList);
      }, 0);
    } else {
      reject("Something went wrong!");
    }
  });
};
