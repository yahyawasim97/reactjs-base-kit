/*
 * @file: connection.js
 * @description: Connections
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

/* eslint-disable no-unused-vars */

const localhost = 'localhost:3001';
const staging = '';

const runningUrl = process.env.NODE_ENV === 'production' ? staging : localhost;
const httpUrl = `http://${runningUrl}/`;
const socketUrl = `ws://${runningUrl}/`;

export default class Connection {
  static getBaseUrl() {
    return httpUrl;
  }

  static getSocketUrl() {
    return socketUrl;
  }
}
