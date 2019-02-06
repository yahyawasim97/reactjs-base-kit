/*
 * @file: RestClient.js
 * @description: Fetch method to call rest apis like POST, PUT, GET, DELETE etc.
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import querystring from 'querystring';

class RestClient {
  static post(url, params, token = '') {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${url}`, {
        body: JSON.stringify(params),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: token,
        },
        method: 'POST',
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static put(url, params, token = '') {
    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${url}`, {
        body: JSON.stringify(params),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: token,
        },
        method: 'PUT',
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static delete(url, params, token = '') {
    const query = querystring.stringify(params);

    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${url}?${query}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: token,
        },
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static get(url, params, token = '') {
    const query = querystring.stringify(params);

    return new Promise((resolve, reject) => {
      fetch(`/api/v1/${url}?${query}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: token,
        },
        method: 'GET',
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static fetch(url, method) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: { Accept: 'application/json' },
        method,
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static fileUploader(url, params) {
    return new Promise((resolve, reject) => {
      const body = new FormData();

      body.append('file', params);

      fetch(`/api/v1/util/${url}`, {
        body,
        method: 'POST',
      })
        .then((response) => response.json())
        .then((responseText) => {
          resolve(responseText);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default RestClient;
