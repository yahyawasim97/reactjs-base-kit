import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware as createRouterMiddleware } from "connected-react-router";
import reducers from "../reducers";
import sagas from "../sagas";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line

const ConfigureStore = history => {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);
  const isEnhancerAvailable = process.env.NODE_ENV !== "production" && typeof composeEnhancer === "function";

  const middleware = isEnhancerAvailable
    ? composeEnhancer(applyMiddleware(routerMiddleware, sagaMiddleware))
    : applyMiddleware(routerMiddleware, sagaMiddleware);

  const store = createStore(reducers(history), middleware);
  const persistor = persistStore(store);

  sagaMiddleware.run(sagas);

  return {
    persistor,
    store
  };
};

export default ConfigureStore;
