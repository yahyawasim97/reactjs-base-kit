/*
 * @file: index.js
 * @description: Client side
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRoutes } from './Routes';

hydrate(<BrowserRoutes />, document.querySelector('#app'));
