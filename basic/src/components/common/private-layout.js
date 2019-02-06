import React from "react";
import { node } from "prop-types";

const PrivateLayout = ({ component: Component, ...rest }) => (
  <div key={Date.now()} className="private-layout">
    <div className="app-content">
      <Component {...rest} />
    </div>
  </div>
);

PrivateLayout.propTypes = { component: node.isRequired };

export default PrivateLayout;
