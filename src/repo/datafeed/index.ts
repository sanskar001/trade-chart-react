import { Datafeed } from "@ChartWidget/type";
import { fetchProducts, fetchSymbols } from "./rest-api";
import { FetchSocket } from "@/services/socket.service";
import { BASE_URL, API_KEY } from "@/util/constant";

let Socket: FetchSocket;

export const initSocket = (onAuth: () => void) => {
  Socket = new FetchSocket(BASE_URL, () => {
    const request = {
      MessageType: "Authenticate",
      Password: API_KEY,
    };

    Socket.sendRequest(request, "AuthenticateResult", onAuth);
  });
};

export const datafeed: Datafeed = {
  // getProducts: () => {
  //   const productList = mockProductData.data.map((product) =>
  //     product.Value.toLowerCase()
  //   );
  //   return productList;
  // },

  // getSymbols: (product) => {
  //   const data = mockSymbolData[product.toUpperCase()];
  //   const symbolList = data
  //     ? data.map((symbol: any) => {
  //         return {
  //           identifier: symbol.Identifier.toLowerCase(),
  //           product: symbol.Product.toLowerCase(),
  //           tradeType: symbol.Name.toUpperCase(),
  //           optionType: symbol.OptionType.toUpperCase(),
  //         };
  //       })
  //     : [];
  //   return symbolList as SymbolListType;
  // },

  getProducts: async (resolveCallback, rejectCallback) => {
    try {
      const data = await fetchProducts();
      resolveCallback(data);
      console.log("getProducts datafeed socket: ", Socket);
      // eslint-disabled-next-line
    } catch (err: any) {
      rejectCallback(err);
    }
  },

  getSymbols: async (product, resolveCallback, rejectCallback) => {
    try {
      const data = await fetchSymbols(product);
      resolveCallback(data);
    } catch (err: any) {
      rejectCallback(err);
    }
  },
};
