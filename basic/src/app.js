import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { createBrowserHistory } from "history";
import { ConnectedRouter } from "connected-react-router";
import isEqual from "lodash.isequal";
import Navigation from "./navigation";
import configureStore from "./config/configure-store";
import { Loader } from "./components";
import createSocketClient, { getSocketClient } from "./utilities/socket-client";

let prevUserDetail = null;
const history = createBrowserHistory();
const { persistor, store } = configureStore(history);

history.listen(() => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  });
});

const handleChange = () => {
  const { userDetails, token } = store.getState().user;

  if (userDetails !== null && !isEqual(userDetails, prevUserDetail)) {
    prevUserDetail = userDetails;
    if (!getSocketClient()) {
      createSocketClient({
        dispatch: store.dispatch,
        token
      });
    }
  }
};

store.subscribe(handleChange);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loader loading={false} />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Navigation store={store} />
      </ConnectedRouter>
      <Loader />
    </PersistGate>
  </Provider>
);

export default App;
