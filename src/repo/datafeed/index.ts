import { Datafeed } from "@ChartWidget/type";
import { fetchSymbols } from "./rest-api";
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
  getProducts: async (resolveCallback, rejectCallback) => {
    const request = {
      MessageType: "GetProducts",
      Exchange: "NFO",
    };

    Socket.sendRequest(request, "ProductsResult", (eventResult) => {
      const productList = eventResult.Result.map((item: any) => item.Value);
      resolveCallback(productList);
    });

    false && rejectCallback(new Error("[getProducts]: Something went wrong!"));
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
