/*
 * @file: user.js
 * @description: User Actions
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 * */

import { createAction } from 'redux-actions';

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = createAction(USER_LOGIN);

export const USER_LOGOUT = 'USER_LOGOUT';
export const userLogout = createAction(USER_LOGOUT);

export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';
export const updateUserProfile = createAction(UPDATE_USER_PROFILE);
