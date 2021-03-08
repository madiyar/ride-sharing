import { takeLatest, put, call, takeEvery } from 'redux-saga/effects';
import {
  GET_TRIP,
  GET_TRIPS,
  ADD_TRIP
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';
import {
  getTrips,
  getUserTrips,
  getTrip,
  getUserTrip,
  addTrip,
  addUserTrip
} from './api';
import { createError, history } from 'lib/helpers';

function* getTripsSaga({ payload: { type, ...rest } }) {
  try {
    yield put({
      type: GET_TRIPS + LOADING
    });
    let result = [];
    if (type === 'users') {
      result = yield call(getUserTrips, rest);  
    } else {
      result = yield call(getTrips, rest);
    }
    if (result) {
      yield put({
        type: GET_TRIPS + DONE,
        payload: result.map(item => ({ ...item, type }))
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

function* getTripSaga({ payload: { tripId, type } }) {
  try {
    yield put({
      type: GET_TRIP + LOADING
    });
    let result = {};
    if (type === 'drivers') {
      result = yield call(getTrip, tripId);
    } else {
      result = yield call(getUserTrip, tripId);
    }
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

function* addTripSaga({ payload }) {
  try {
    yield put({
      type: ADD_TRIP + LOADING
    });
    let result;
    const { user_type, ...body } = payload;
    if (user_type === 'driver') {
      result = yield call(addTrip, body);
    } else {
      result = yield call(addUserTrip, body);
    }
    if (result) {
      yield put({
        type: ADD_TRIP + DONE,
        payload: result
      });
      history.push(`/trip/${user_type === 'driver' ? 'drivers' : 'users'}/${result?.id}`);
    }
  } catch (e) {
    yield put(createError(e));
    yield put({
      type: ADD_TRIP + FAIL,
    });
  }
}

export default function* tripsSaga() {
  yield takeEvery(GET_TRIPS, getTripsSaga);
  yield takeLatest(GET_TRIP, getTripSaga);
  yield takeLatest(ADD_TRIP, addTripSaga);
}
