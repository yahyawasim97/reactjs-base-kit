import React from "react";
import { Switch } from "react-router";
import { shape, string } from "prop-types";
import EnRoute from "./en-route";
import routes from "./routes";

const auth = store => store.getState().user.token;

const Navigation = ({ store }) => (
  <Switch>
    {routes.map(({ component: Component, path, type, to, title }) => (
      <EnRoute
        key={title}
        exact
        title={title}
        authHandler={auth}
        component={Component}
        path={path}
        store={store}
        type={type}
        to={to}
      />
    ))}
  </Switch>
);

Navigation.propTypes = {
  store: shape({
    user: shape({
      userDetails: shape({ _id: string })
    }).isRequired
  }).isRequired
};

export default Navigation;
