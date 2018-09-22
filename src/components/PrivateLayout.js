/*
 * @file: PrivateLayout.js
 * @description: Private layout for logged in users.
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React from 'react';
import { func, node, shape } from 'prop-types';

const PrivateLayout = ({
  component: Component, history: Props,
}) => (
  <div className="mainOuter afterLogin">
    <section className="contentarea dashboard contentWrapper">
      <SideBarNavigation history={Props.history} />
      <Component history={Props.history} />
    </section>
  </div>
);

PrivateLayout.propTypes = {
  component: node.isRequired,
  history: shape({ push: func.isRequired }).isRequired,
};

export default PrivateLayout;
