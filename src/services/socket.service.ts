const BASE_URL = "wss://endpoint:port";

/* eslint-disable */

type eventHandlerType = (event: Event) => void;

const errorHandler: eventHandlerType = (event) => {
  console.log("Error Handler", event);
};

const messageObject: { [key: string]: eventHandlerType } = {
  Error: errorHandler,
};

class fetchSocket {
  private readonly instance: WebSocket;

  constructor(baseURL: string) {
    this.instance = new WebSocket(baseURL);

    this.instance.onopen = (event: Event) => {
      this.openHandler(event);
    };

    this.instance.onclose = (event: Event) => {
      this.closeHandler(event);
    };

    this.instance.onmessage = (event: Event) => {
      this.messageHandler(event);
    };

    this.instance.onerror = (event: Event) => {
      this.errorHandler(event);
    };
  }

  private openHandler(event: Event) {
    console.log("WEBSOCKET CONNECTED!", event);
  }

  private closeHandler(event: Event) {
    console.log("WEBSOCKET DISCONNTECTED!", event);
  }

  private messageHandler(event: Event) {
    console.log("WEBSOCKET MESSAGE!", event);
    // messageObject[event.messageType](event);
  }

  private errorHandler(event: Event) {
    console.log("WEBSOCKET ERROR!", event);
  }

  sendRequest(message: any, msgType: string, onSuccess: () => void) {
    if (!messageObject.hasOwnProperty(msgType)) {
      messageObject[msgType] = onSuccess;
    }

    const jsonMessage = JSON.stringify(message);
    this.instance.send(jsonMessage);
  }

  closeSocket() {
    this.instance.close();
  }
}

export const Socket = new fetchSocket(BASE_URL);
