/*
 * @file: app.js
 * @description: Application Actions
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 * */

import { createAction } from 'redux-actions';

export const HIDE_LOADER = 'HIDE_LOADER';
export const hideLoader = createAction(HIDE_LOADER);

export const SHOW_LOADER = 'SHOW_LOADER';
export const showLoader = createAction(SHOW_LOADER);
