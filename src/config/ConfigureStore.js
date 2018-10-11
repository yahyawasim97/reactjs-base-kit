/*
 * @file: configureStore.dev.js
 * @description: Configure Store for Development
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';
import sagas from '../sagas';

const ConfigureStore = ({
  history, preloadedState,
}) => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);
  const reducers = connectRouter(history)(rootReducer);
  const store = createStore(reducers, preloadedState, applyMiddleware(routerMiddleware, sagaMiddleware));
  const persister = persistStore(store);

  sagaMiddleware.run(sagas);

  return {
    persister,
    store,
  };
};

export default ConfigureStore;
