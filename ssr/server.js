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
import { Provider } from 'react-redux';
import Template from './HtmlTemplate';
import { ServerRoutes } from './src/config/Routes';
import configureStore from './src/config/ConfigureStore';

const server = express();
const PORT = process.env.PORT || 3000;

const handleRender = (req, res) => {
  const { store } = configureStore({
    history: {},
    preloadedState: {},
  });
  const props = {
    context: {},
    req,
  };
  const helmet = Helmet.renderStatic();

  const content = renderToString(<Provider store={store}>
    <ServerRoutes {...props} />
  </Provider>);

  const preloadedState = store.getState();

  const html = Template({
    content,
    helmet,
    preloadedState,
  });

  res.send(html);
};

server.use(bodyParser.json());
server.use(express.static('build/public'));
server.get('*', handleRender);
server.listen(PORT);
