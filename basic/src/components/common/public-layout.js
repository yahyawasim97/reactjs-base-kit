import React from "react";

const PublicLayout = ({ component: Component, ...rest }) => (
  <div key={Date.now()} className="public-layout">
    <Component {...rest} />
  </div>
);

export default PublicLayout;
