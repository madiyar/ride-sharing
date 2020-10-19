import { all } from 'redux-saga/effects';
import helpersSaga from './helpers/saga';

export default function* rootSaga() {
  yield all([
    helpersSaga()
  ]);
}
