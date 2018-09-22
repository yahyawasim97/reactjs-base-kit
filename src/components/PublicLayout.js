/*
 * @file: PublicLayout.js
 * @description: Public layout for non-logged in users.
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React from 'react';
import { node } from 'prop-types';

const PublicLayout = ({
  component: Component, ...rest
}) => (
  <div className="Default">
    <Component {...rest} />
  </div>
);

PublicLayout.propTypes = { component: node.isRequired };

export default PublicLayout;
