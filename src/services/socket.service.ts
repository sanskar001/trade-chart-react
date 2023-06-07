/* eslint-disable */

type ConnectionHandler = () => void;
type ResolveCallback = (eventResult?: any) => void;

const messageObject: { [key: string]: ResolveCallback | undefined } = {
  echo: undefined,
  allowvmrunningresult: undefined,
  allowServeroarunningresult: undefined,
};

export class FetchSocket {
  private readonly instance: WebSocket;
  private readonly onConnect: ConnectionHandler;

  constructor(baseURL: string, onConnect: ConnectionHandler) {
    this.instance = new WebSocket(baseURL);
    this.onConnect = onConnect;

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
    this.onConnect();
  }

  private closeHandler(event: Event) {
    console.log("WEBSOCKET DISCONNTECTED!", event);
  }

  private messageHandler(event: any) {
    const eventResult = JSON.parse(event.data);
    const resolveCb = messageObject[eventResult.MessageType.toLowerCase()];

    if (resolveCb) {
      resolveCb?.(eventResult);
    }
  }

  private errorHandler(event: Event) {
    console.log("WEBSOCKET ERROR!", event);
  }

  sendRequest(
    request: any,
    messageType: string,
    resolveCallback: ResolveCallback
  ) {
    const msgType = messageType.toLowerCase();
    if (!messageObject.hasOwnProperty(msgType)) {
      messageObject[msgType] = resolveCallback;
    }

    const jsonRequest = JSON.stringify(request);
    this.instance.send(jsonRequest);
  }

  closeSocket() {
    this.instance.close();
  }
}
