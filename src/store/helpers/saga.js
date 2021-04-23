import { takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_CITIES,
  AUTH_USER,
  SIGN_UP,
  GET_USER,
  SET_ERROR,
  UPLOAD_CAR_PHOTO,
  GET_COMMENTS,
  DELETE_COMMENT,
  ADD_COMMENT
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';
import {
  getCities,
  authUser,
  getUser,
  signUp,
  uploadPhoto,
  getComments,
  deleteComment,
  addComment
} from './api';
import { createError } from 'lib/helpers';

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
    yield put(createError(e));
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
    yield put(createError(e));
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
    yield put(createError(e));
    yield put({
      type: AUTH_USER + FAIL
    });
  }
}

function* getUserSaga({ payload }) {
  try {
    yield put({
      type: GET_USER + LOADING
    });
    const result = yield call(getUser, payload);
    if (result) {
      yield put({
        type: GET_USER + DONE,
        payload: result
      });
    }
  } catch (e) {
    console.log(e);
    yield put(createError(e));
    yield put({
      type: GET_USER + FAIL
    });
  }
}

function* uploadPhotoSaga({ payload }) {
  try {
    yield put({
      type: UPLOAD_CAR_PHOTO + LOADING
    });
    const result = yield call(uploadPhoto, payload);
    if (result) {
      yield put({
        type: UPLOAD_CAR_PHOTO + DONE,
        payload: result
      });
    }
  } catch (e) {
    console.log(e);
    yield put(createError(e));
    yield put({
      type: UPLOAD_CAR_PHOTO + FAIL
    });
  }
}

function* getCommentsSaga({ payload }) {
  try {
    yield put({
      type: GET_COMMENTS + LOADING
    });
    const result = yield call(getComments, payload);
    if (result) {
      yield put({
        type: GET_COMMENTS + DONE,
        payload: result
      });
    }
  } catch (e) {
    yield put(createError(e));
    yield put({
      type: GET_COMMENTS + FAIL
    });
  }
}

function* deleteCommentSaga({ payload }) {
  try {
    yield put({
      type: DELETE_COMMENT + LOADING
    });
    const result = yield call(deleteComment, payload);
    if (result) {
      yield put({
        type: DELETE_COMMENT + DONE,
        payload
      });
    }
  } catch (e) {
    yield put(createError(e));
    yield put({
      type: DELETE_COMMENT + FAIL
    });
  }
}

function* addCommentSaga({ payload }) {
  try {
    yield put({
      type: ADD_COMMENT + LOADING
    });
    const result = yield call(addComment, payload);
    if (result) {
      yield put({
        type: ADD_COMMENT + DONE,
        payload: result
      });
    }
  } catch (e) {
    yield put(createError(e));
    yield put({
      type: ADD_COMMENT + FAIL
    });
  }
}

export default function* helpersSaga() {
  yield takeLatest(GET_CITIES, getCitiesSaga);
  yield takeLatest(AUTH_USER, authUserSaga);
  yield takeLatest(SIGN_UP, createUserSaga);
  yield takeLatest(SET_ERROR, setErrorSaga);
  yield takeLatest(GET_USER, getUserSaga);
  yield takeLatest(UPLOAD_CAR_PHOTO, uploadPhotoSaga);
  yield takeLatest(GET_COMMENTS, getCommentsSaga);
  yield takeLatest(DELETE_COMMENT, deleteCommentSaga);
  yield takeLatest(ADD_COMMENT, addCommentSaga);
}
