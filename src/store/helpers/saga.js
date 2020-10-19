import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_CITIES
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';
import {
  getCities
} from './api';

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

export default function* helpersSaga() {
  yield takeLatest(GET_CITIES, getCitiesSaga);
}
