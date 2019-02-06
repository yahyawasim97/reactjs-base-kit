import io from "socket.io-client";
import { BASE_URL_AUTH_SERVICE } from "../config/connection";
import { logoutSuccess } from "../actions/user-actions-types";

let socketClient = null;

class CreateSocketClient {
  constructor(options) {
    const { token, dispatch } = options;

    this.token = token;
    this.dispatch = dispatch;
    this.endpoint = `${BASE_URL_AUTH_SERVICE}?token=${token}`;
    this.connection = io.connect(this.endpoint);
    this.closeSocket = this.closeSocket.bind(this);
    this.socketHandler(options);
  }

  socketHandler() {
    this.connection.on("connect", () => {
      console.log("socket - connect"); // eslint-disable-line
    });

    this.connection.on("disconnect", () => {
      console.log("socket - disconnect"); // eslint-disable-line
    });

    this.connection.on("isAuthenticated", response => {
      console.log("isAuthenticated==> ", response); // eslint-disable-line
      if (!response.isAuthenticated) {
        this.dispatch(logoutSuccess());
      }
    });
  }

  closeSocket = () => {
    this.connection.close();
  };
}

const SocketClient = options => {
  if (!socketClient) {
    socketClient = new CreateSocketClient(options);
  }

  return socketClient;
};

export const getSocketClient = () => socketClient;

export const closeConnection = () => {
  if (socketClient) {
    socketClient.closeSocket();
    socketClient = null;
  }
};

export default SocketClient;
