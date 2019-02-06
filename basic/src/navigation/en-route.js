import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PublicLayout, PrivateLayout } from "../components";

export default ({ component: Component, type = "private", authHandler, to = "/signin", store, ...rest }) => (
  <Route
    key={Date.now()}
    {...rest}
    exact
    render={props => {
      if (type === "none") {
        return <Component key={Date.now()} {...props} />;
      }

      if (type === "public" && !authHandler(store)) {
        return <PublicLayout key={Date.now()} component={Component} {...props} />;
      }

      if (type === "private" && authHandler(store)) {
        return <PrivateLayout key={Date.now()} component={Component} {...props} />;
      }

      return (
        <Redirect
          to={{
            pathname: to,
            state: { from: props.location }
          }}
        />
      );
    }}
  />
);
