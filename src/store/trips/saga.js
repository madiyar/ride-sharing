import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_TRIPS
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';
import {
  getTrips
} from './api';

function* getTripsSaga() {
  try {
    yield put({
      type: GET_TRIPS + LOADING
    });
    console.log('safga')
    const payload = yield call(getTrips);
    if (payload) {
      yield put({
        type: GET_TRIPS + DONE,
        payload
      });
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: GET_TRIPS + FAIL
    });
  }
}

export default function* tripsSaga() {
  yield takeLatest(GET_TRIPS, getTripsSaga);
}
