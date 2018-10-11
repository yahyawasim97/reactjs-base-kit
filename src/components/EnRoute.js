/*
 * @file: EnRoute.js
 * @description: EnRoute used to create routes.
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default ({
  component, layout: Layout, type = 'private', authHandler, to = '/signin', store, ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (type === 'public') {
        return <Layout component={component} {...props} />;
      }
      if (type === 'private' && authHandler(store)) {
        return <Layout component={component} {...props} />;
      }

      return (
        <Redirect
          to={{
            pathname: to,
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);
