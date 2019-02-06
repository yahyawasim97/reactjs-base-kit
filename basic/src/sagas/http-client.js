import { call, select, put } from "redux-saga/effects";
import Idx from "idx";
import { push } from "connected-react-router";
import { showLoader, hideLoader } from "../actions/app-action-types";
import { logoutSuccess, setAuthenticationToken } from "../actions/user-actions-types";
import axiosInstance from "../utilities/axios-instance";

function* httpClient(payload) {
  const authToken = yield select(({ user: { token } }) => token);
  const data = {
    ...payload,
    headers: { "x-authorization": authToken }
  };
  yield put(showLoader());

  try {
    const {
      data: result,
      error,
      headers: { "x-authorization": authenticationToken = "" }
    } = yield call(axiosInstance, data);

    yield put(hideLoader());
    if (authenticationToken) {
      yield put(setAuthenticationToken(authenticationToken));
    }

    return {
      error,
      result
    };
  } catch (error) {
    yield put(hideLoader());
    if (Idx(error, _ => _.statusCode)) {
      if (error.statusCode === 401) {
        yield put(logoutSuccess());
        yield put(push({ pathname: "/" }));
      }
    }
  }

  return {
    error: true,
    result: null
  };
}

export default httpClient;
