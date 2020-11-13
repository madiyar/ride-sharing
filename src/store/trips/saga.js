import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_TRIP,
  GET_TRIPS
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';
import {
  getTrips,
  getTrip
} from './api';
import { createError } from 'lib/helpers';

function* getTripsSaga() {
  try {
    yield put({
      type: GET_TRIPS + LOADING
    });
    const payload = yield call(getTrips);
    if (payload) {
      yield put({
        type: GET_TRIPS + DONE,
        payload
      });
    }
  } catch (e) {
    console.log(e);
    yield put(createError(e));
    yield put({
      type: GET_TRIPS + FAIL
    });
  }
}

function* getTripSaga({ payload }) {
  try {
    yield put({
      type: GET_TRIP + LOADING
    });
    const result = yield call(getTrip, payload);
    if (result) {
      yield put({
        type: GET_TRIP + DONE,
        payload: result
      });
    }
  } catch (e) {
    yield put(createError(e));
    yield put({
      type: GET_TRIP + FAIL,
    });
  }
}

export default function* tripsSaga() {
  yield takeLatest(GET_TRIPS, getTripsSaga);
  yield takeLatest(GET_TRIP, getTripSaga);
}
