/*
 * @file: Loader.js
 * @description: App Loader
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React from 'react';
import ReactLoader from 'react-loaders';
import { bool } from 'prop-types';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';

const Loader = ({ loading }) => (
  <div>
    {loading &&
      createPortal(
        <div className="base-kit-loader">
          <ReactLoader active={true} type="pacman" />
        </div>,
        document.body
      )}
  </div>
);

Loader.propTypes = { loading: bool.isRequired };

export default connect(({ app: { isLoading } }) => ({ loading: isLoading }))(Loader);
