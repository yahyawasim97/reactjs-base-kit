import React from "react";
import Helmet from "react-helmet";
import { string } from "prop-types";

const NotFound = ({ title, message }) => (
  <div className="content">
    <Helmet>
      <title>ReactJS-base-kit - Not found</title>
    </Helmet>
    <div>
      <span className="route-not-found-header">{title}</span>
      <span className="route-not-found-message">{message}</span>
    </div>
  </div>
);

NotFound.propTypes = {
  message: string,
  title: string
};

NotFound.defaultProps = {
  message: "We are sorry but the page you are looking for does not exist.",
  title: "Not found"
};

export default NotFound;
