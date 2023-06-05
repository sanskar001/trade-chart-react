import { Product } from "@/repo/datafeed/type";
import { PRODUCTS_SIZE as SIZE } from "@/util/constant";

interface HistoryProducts {
  get: () => Product[];
  add: (newProduct: Product) => void;
  removeAll: () => void;
}

export const historyProducts: HistoryProducts = {
  get: function () {
    return JSON.parse(localStorage.getItem("products") || "[]");
  },
  add: function (newProduct) {
    const data = this.get();

    if (data.length < SIZE) {
      data.push(newProduct);
    } else if (data.length === SIZE) {
      data.shift();
      data.push(newProduct);
    } else {
      data.pop();
    }
    localStorage.setItem("products", JSON.stringify(data));
  },
  removeAll: function () {
    localStorage.removeItem("products");
  },
};
