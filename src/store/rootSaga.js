import { all } from 'redux-saga/effects';
// import projectSaga from './projects/project.saga';

export default function* rootSaga() {
  yield all([
    // projectSaga()
  ]);
}
