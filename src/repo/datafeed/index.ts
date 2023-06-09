import { Datafeed } from "@ChartWidget/type";
import { FetchSocket } from "@/services/socket.service";
import { BASE_URL, API_KEY } from "@/util/constant";

let socket: FetchSocket;

export const initSocket = (onAuth: () => void) => {
  socket = new FetchSocket(BASE_URL, () => {
    const request = {
      MessageType: "Authenticate",
      Password: API_KEY,
    };

    socket.sendRequest(request, "AuthenticateResult", onAuth);
  });
};

export const datafeed: Datafeed = {
  getProducts: (resolveCallback, rejectCallback) => {
    const request = {
      MessageType: "GetProducts",
      Exchange: "NFO",
    };
    socket.sendRequest(request, "ProductsResult", (eventData) => {
      const productList = eventData.Result.map((item: any) =>
        item.Value.toLowerCase()
      );
      resolveCallback(productList);
    });

    false && rejectCallback(new Error("[getProducts]: Something went wrong!"));
  },

  getSymbols: async (product, resolveCallback, rejectCallback) => {
    const request = {
      MessageType: "GetInstruments",
      Exchange: "NFO",
      Product: product.toUpperCase(),
    };
    socket.sendRequest(request, "InstrumentsResult", (eventData) => {
      const symbolList = eventData.Result
        ? eventData.Result.map((symbol: any) => {
            return {
              identifier: symbol.Identifier.toLowerCase(),
              product: symbol.Product.toLowerCase(),
              tradeType: symbol.Name.toUpperCase(),
              optionType: symbol.OptionType.toUpperCase(),
            };
          })
        : [];
      resolveCallback(symbolList);
    });

    false && rejectCallback(new Error("[getSymbols]: Something went wrong!"));
  },

  getHistory(symbol, resolution, resolveCallback, rejectCallback) {
    console.log("getHistory datafeed:", { symbol, resolution });
    const request = {
      MessageType: "GetHistory",
      Exchange: "NFO",
      InstrumentIdentifier: symbol.identifier,
      Periodicity: "MINUTE",
      Period: 1,
    };

    socket.sendRequest(request, "HistoryOHLCResult", (eventData) => {
      const historyResult = eventData.Result.map((item: any) => {
        return {
          time: item.LastTradeTime,
          open: item.Open,
          close: item.Close,
          low: item.Low,
          high: item.High,
          volume: item.TradedQty,
        };
      });

      historyResult.reverse();
      resolveCallback(historyResult);
    });

    false && rejectCallback(new Error("[getSymbols]: Something went wrong!"));
  },
};
