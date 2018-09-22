/*
 * @file: loader.js
 * @description: Saga for loaders
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import { put, takeLatest } from 'redux-saga/effects';
import { USER_LOGIN } from '../actions/user-actions-types';
import { showLoader } from '../actions/app-action-types';

function* showLoaderHanlder() {
  yield put(showLoader());
}

function* loader() {
  yield [takeLatest(USER_LOGIN, showLoaderHanlder)];
}

export default loader;
