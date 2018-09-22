/*
 * @file: NotFound.js
 * @description: Route for page not found or page has been removed.
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React from 'react';
import Helmet from 'react-helmet';

const NotFound = () => (
  <div>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <h3>404 page not found</h3>
    <p className="route-not-found">We are sorry but the page you are looking for does not exist.</p>
  </div>
);

export default NotFound;
