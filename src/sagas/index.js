/*
 * @file: index.js
 * @description: combine all sagas
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import { all } from 'redux-saga/effects';
import loader from './loader';

const sagas = function* sagas() {
  yield all([loader()]);
};

export default sagas;
