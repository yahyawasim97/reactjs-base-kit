/*
 * @file: Routes.js
 * @description: Server, Browser, Application Routes
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React, { PureComponent } from 'react';
import { Switch, StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { object, shape, string } from 'prop-types';
import EnRoute from './components/EnRoute';
import NotFound from './containers/NotFound';
import PublicLayout from './components/PublicLayout';
// import PrivateLayout from './components/PrivateLayout';
import Signin from './containers/Signin';

const auth = () => true;
// ! !store.getState().user.userDetails;

class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <EnRoute auhtHandler={() => auth()} component={Signin} exact={true} layout={PublicLayout} path="/" type="public" />
        <EnRoute auhtHandler={() => auth()} component={Signin} exact={true} layout={PublicLayout} path="/signin" type="public" />
        <EnRoute auhtHandler={() => auth()} component={NotFound} exact={true} layout={PublicLayout} path="*" type="public" />
      </Switch>
    );
  }
}

export const BrowserRoutes = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export const ServerRoutes = ({
  context, req,
}) => (
  <StaticRouter context={context} location={req.url}>
    <Routes />
  </StaticRouter>
);

ServerRoutes.propTypes = {
  context: object.isRequired,
  req: shape({ url: string.isRequired }),
};

export default Routes;
