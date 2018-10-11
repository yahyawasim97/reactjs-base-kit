/*
 * @file: loader.js
 * @description: Saga for loaders
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 */

import { call, takeLatest, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { USER_LOGIN } from '../actions/user-actions-types';
import { showLoader } from '../actions/app-action-types';

export function* showLoaderHandler() {
  yield call(delay, 5000);
  yield put(showLoader());
}

function* loader() {
  yield takeLatest(USER_LOGIN, showLoaderHandler);
}

export default loader;
