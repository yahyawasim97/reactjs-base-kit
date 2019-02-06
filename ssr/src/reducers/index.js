/*
 * @file: index.js
 * @description: Combine all reducers with persist settings.
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 * */

import { combineReducers } from 'redux';
import app from './app';
import user from './user';

const reducers = combineReducers({
  app,
  user,
});

export default reducers;
