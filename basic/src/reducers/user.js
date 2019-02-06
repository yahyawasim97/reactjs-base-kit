import {
  DELETE_ACCOUNT_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  SET_AUTHENTICATION_TOKEN,
  SET_DEVICE_TOKEN
} from "../actions/user-actions-types";

const initialState = {
  deviceToken: "test",
  token: null,
  userDetails: {}
};

export default function user(state = initialState, { payload, type }) {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userDetails: payload
      };

    case SET_AUTHENTICATION_TOKEN:
      return {
        ...state,
        token: payload
      };

    case SET_DEVICE_TOKEN:
      return {
        ...state,
        deviceToken: payload
      };

    case LOGOUT_SUCCESS:
      return initialState;

    case DELETE_ACCOUNT_SUCCESS:
      return initialState;

    default:
      return state;
  }
}
