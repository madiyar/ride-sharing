import { all } from 'redux-saga/effects';
import helpersSaga from './helpers/saga';
import tripsSaga from './trips/saga';

export default function* rootSaga() {
  yield all([
    helpersSaga(),
    tripsSaga()
  ]);
}
