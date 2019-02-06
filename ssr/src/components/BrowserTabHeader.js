/*
 * @file: BrowserTabHeader.js
 * @description: Browser Tab Header
 * @date: 11.10.2018
 * @author: Manish Budhiraja
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { node, string } from 'prop-types';

const BrowserTabHeader = ({
  title, children,
}) => (
  <Helmet>
    <title>{title}</title>
    {children}
  </Helmet>
);

BrowserTabHeader.propTypes = {
  children: node,
  title: string,
};

BrowserTabHeader.defaultProps = { title: 'Reactjs Base kit' };

export default BrowserTabHeader;
