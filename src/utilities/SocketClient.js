/*
 * @file: SocketClient.js
 * @description: Socket client for real time events from server
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import io from 'socket.io-client';
import Connection from '../config/Connection';

let socketClient = null;

class SocketClientClass {
  constructor(store) {
    this.endpoint = Connection.socketUrl();
    this.store = store;
    // this.authenticate = this.authenticate.bind(this);
    this.connection = io.connect(`${this.endpoint}`);
    this.socketHandler(store);
  }

  socketHandler() {
    this.connection.on('connect', () => {
      // console.log("socket - connect");
    });

    this.connection.on('disconnect', () => {
      // console.log("socket - disconnect");
    });
  }

  authenticate = (token) => {
    this.connection.emit('authenticate', { token }, () => {
      // console.log('socket - authenticate', error, res);
    });
  };
}

export default function SocketClient(store) {
  if (!socketClient) {
    socketClient = new SocketClientClass(store);
  }

  return socketClient;
}
