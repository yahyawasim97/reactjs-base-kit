import { all, call, put, takeLatest } from "redux-saga/effects";
import { push } from "connected-react-router";
import { closeConnection } from "../utilities/socket-client";
import httpClient from "./http-client";
import {
  DELETE_ACCOUNT,
  deleteAccountRequested,
  deleteAccountFailure,
  deleteAccountSuccess,
  LOGIN,
  loginFailure,
  loginRequested,
  loginSuccess,
  LOGOUT,
  logoutFailure,
  logoutRequested,
  logoutSuccess
} from "../actions/user-actions-types";

export function* login({ payload: data }) {
  yield put(loginRequested());

  const { result, error } = yield call(httpClient, {
    data,
    method: "post",
    url: "users/login"
  });

  if (error) {
    yield put(loginFailure(error));
  } else {
    yield put(loginSuccess(result.data));
    yield put(push({ pathname: "/" }));
  }
}

export function* logout({ payload: data }) {
  yield put(logoutRequested());

  const { error } = yield call(httpClient, {
    data,
    method: "put",
    url: "users/logOut"
  });

  if (error) {
    yield put(logoutFailure(error));
  } else {
    yield put(logoutSuccess());
    yield call(closeConnection);
    yield put(push({ pathname: "/" }));
  }
}

export function* deleteAccount({ payload: data }) {
  yield put(deleteAccountRequested());

  const { error } = yield call(httpClient, {
    data,
    method: "put",
    url: "users/deleteAccount"
  });

  if (error) {
    yield put(deleteAccountFailure(error));
  } else {
    yield put(deleteAccountSuccess());
    yield call(closeConnection);
    yield put(push({ pathname: "/" }));
  }
}

function* User() {
  yield all([takeLatest(DELETE_ACCOUNT, deleteAccount), takeLatest(LOGIN, login), takeLatest(LOGOUT, logout)]);
}

export default User;
