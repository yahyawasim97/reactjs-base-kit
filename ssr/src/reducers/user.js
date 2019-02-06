/*
 * @file: user.js
 * @description: User Reducer
 * @date: 09.08.2018
 * @author: Manish Budhiraja
 *
 */

import { USER_LOGIN, USER_LOGOUT, UPDATE_USER_PROFILE } from '../actions/user-actions-types';

const initialState = { userDetails: null };

export default function user(state = initialState, {
  payload, type,
}) {
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        userDetails: payload,
      };

    case UPDATE_USER_PROFILE:
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          ...payload,
        },
      };

    case USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
}
