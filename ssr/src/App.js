/*
 * @file: App.js
 * @description: App entry point
 * @date: 11.10.2018
 * @author: Manish Budhiraja
 */

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { BrowserRoutes } from './config/Routes';
import configureStore from './config/ConfigureStore';
import Loader from './components/Loader';

const history = createHistory();

const { store } = configureStore({
  history,
  preloadedState: window.__PRELOADED_STATE__, //eslint-disable-line
});

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <BrowserRoutes />
          <Loader />
        </div>
      </Provider>
    );
  }
}

export default App;
