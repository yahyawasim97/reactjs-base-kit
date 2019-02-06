import React from "react";
import { bool } from "prop-types";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import Lottie from "react-lottie";

const animation = require("../../assets/loading.json"); // eslint-disable-line
const loaderRoot = document.getElementById("loader-root");

const defaultOptions = {
  animationData: animation,
  autoplay: true,
  loop: true,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
};

const Loader = ({ isLoading }) =>
  isLoading
    ? createPortal(
      <div className="loader">
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>,
        loaderRoot
      )
    : null;

Loader.propTypes = { loading: bool.isRequired };

export default connect(({ app: { isLoading } }) => ({ isLoading }))(Loader);
