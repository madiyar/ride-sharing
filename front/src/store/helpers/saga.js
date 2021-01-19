import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_CITIES,
  AUTH_USER,
  SIGN_UP,
  SET_ERROR
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';
import {
  getCities,
  authUser,
  signUp
} from './api';

function* setErrorSaga({ payload }) {
  try {
    yield put({
      type: SET_ERROR + DONE,
      payload
    });
  } catch (e) {
    console.log(e)
  }
}

function* getCitiesSaga() {
  try {
    yield put({
      type: GET_CITIES + LOADING
    });
    const payload = yield call(getCities);
    if (payload) {
      yield put({
        type: GET_CITIES + DONE,
        payload
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_CITIES + FAIL
    });
  }
}

function* authUserSaga({ payload }) {
  try {
    yield put({
      type: AUTH_USER + LOADING
    });
    const result = yield call(authUser, payload);
    if (result) {
      yield put({
        type: AUTH_USER + DONE,
        payload: result
      });
      localStorage.setItem('user', JSON.stringify(result));
      document.location.reload();
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: AUTH_USER + FAIL
    });
  }
}

function* createUserSaga({ payload }) {
  try {
    yield put({
      type: AUTH_USER + LOADING
    });
    const result = yield call(signUp, payload);
    if (result) {
      yield put({
        type: AUTH_USER + DONE,
        payload: result
      });
      localStorage.setItem('user', JSON.stringify(result));
      document.location.reload();
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: AUTH_USER + FAIL
    });
  }
}

export default function* helpersSaga() {
  yield takeLatest(GET_CITIES, getCitiesSaga);
  yield takeLatest(AUTH_USER, authUserSaga);
  yield takeLatest(SIGN_UP, createUserSaga);
  yield takeLatest(SET_ERROR, setErrorSaga);
}
