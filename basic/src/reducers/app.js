import { HIDE_LOADER, SHOW_LOADER } from "../actions/app-action-types";
import { LOGOUT_SUCCESS, DELETE_ACCOUNT_SUCCESS } from "../actions/user-actions-types";

const initialState = {
  visible: false
};

export default function app(state = initialState, { type }) {
  switch (type) {
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false
      };

    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true
      };

    case LOGOUT_SUCCESS:
      return initialState;

    case DELETE_ACCOUNT_SUCCESS:
      return initialState;

    default:
      return state;
  }
}
