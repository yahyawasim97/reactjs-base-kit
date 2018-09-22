/*
 * @file: server.js
 * @description: Node express server for server side rendering
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import bodyParser from 'body-parser';
import { Helmet } from 'react-helmet';
import { ServerRoutes } from './src/Routes';

const server = express();
const PORT = process.env.PORT || 3000;

server.use(bodyParser.json());
server.use(express.static('build/public'));

server.get('*', (req, res) => {
  const props = {
    context: {},
    req,
  };
  const helmet = Helmet.renderStatic();
  const content = renderToString(<ServerRoutes {...props} />);

  const html = `
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
      ${helmet.meta}
      ${helmet.title}
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="client_bundle.js"></script>
    </body>
  </html>
  `;

  res.send(html);
});

server.listen(PORT, () => console.log(`Server started @ ${PORT}`));
