/*
 * @file: app.js
 * @description: Application Reducer
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 * */

import { HIDE_LOADER, SHOW_LOADER } from '../actions/app-action-types';
import { USER_LOGOUT } from '../actions/user-actions-types';

const initialState = { isLoading: false };

export default function app(state = initialState, action) {
  switch (action.type) {
    case HIDE_LOADER:
      return { isLoading: false };

    case SHOW_LOADER:
      return { isLoading: true };

    case USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
}
