import { Datafeed } from "@ChartWidget/type";
import mockProductData from "@/mocks/product-data.json";

export const mockDatafeed: Datafeed = {
  getProducts: () => {
    const productList = mockProductData.data.map((product) => product.Value);
    return productList;
  },
};
