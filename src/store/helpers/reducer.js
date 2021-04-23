import { handleActions } from 'redux-actions';
import {
  GET_CITIES,
  AUTH_USER,
  GET_USER,
  SET_ERROR,
  UPLOAD_CAR_PHOTO,
  GET_COMMENTS,
  DELETE_COMMENT,
  ADD_COMMENT
} from './constants';
import { DONE, LOADING, FAIL } from '../constants';

const initialState = {
  cities: {
    loading: false,
    data: []
  },
  authFormLoading: false,
  userLoading: false,
  uploadLoading: false,
  user: null,
  error: null,
  comments: null,
  commentsLoading: false
};

export default handleActions({
  [SET_ERROR + DONE]: (state, { payload }) => ({
    ...state,
    error: payload
  }),
  // GET CITIES
  [GET_CITIES + LOADING]: (state, { payload }) => ({
    ...state,
    cities: {
      ...state.cities,
      loading: true
    }
  }),
  [GET_CITIES + FAIL]: (state, { payload }) => ({
    ...state,
    cities: {
      ...state.cities,
      loading: false
    }
  }),
  [GET_CITIES + DONE]: (state, { payload }) => ({
    ...state,
    cities: {
      ...state.cities,
      loading: false,
      data: payload
    }
  }),
  // AUTH USER
  [AUTH_USER + LOADING]: (state, { payload }) => ({
    ...state,
    authFormLoading: true
  }),
  [AUTH_USER + FAIL]: (state, { payload }) => ({
    ...state,
    authFormLoading: false
  }),
  [AUTH_USER + DONE]: (state, { payload }) => ({
    ...state,
    authFormLoading: false,
    currentUser: payload
  }),
  // GET USER
  [GET_USER + LOADING]: (state, { payload }) => ({
    ...state,
    userLoading: true
  }),
  [GET_USER + FAIL]: (state, { payload }) => ({
    ...state,
    userLoading: false
  }),
  [GET_USER + DONE]: (state, { payload }) => ({
    ...state,
    userLoading: false,
    user: payload
  }),
  // UPLOAD PHOTO
  [UPLOAD_CAR_PHOTO + LOADING]: state => ({
    ...state,
    uploadLoading: true
  }),
  [UPLOAD_CAR_PHOTO + FAIL]: state => ({
    ...state,
    uploadLoading: false
  }),
  [UPLOAD_CAR_PHOTO + DONE]: (state, { payload }) => ({
    ...state,
    uploadLoading: false,
    user: {
      ...state?.user,
      ...payload
    }
  }),
  // GET COMMENTS
  [GET_COMMENTS + LOADING]: state => ({
    ...state,
    commentsLoading: true,
    comments: null
  }),
  [GET_COMMENTS + FAIL]: state => ({
    ...state,
    commentsLoading: false,
    comments: null
  }),
  [GET_COMMENTS + DONE]: (state, { payload }) => ({
    ...state,
    commentsLoading: false,
    comments: payload
  }),
  // DELETE COMMENT
  [DELETE_COMMENT + LOADING]: state => ({
    ...state,
    commentsLoading: true
  }),
  [DELETE_COMMENT + FAIL]: state => ({
    ...state,
    commentsLoading: false
  }),
  [DELETE_COMMENT + DONE]: (state, { payload }) => ({
    ...state,
    commentsLoading: false,
    comments: state.comments?.filter(item => item?.id !== payload) || []
  }),
  // ADD COMMENT
  [ADD_COMMENT + LOADING]: state => ({
    ...state,
    commentsLoading: true
  }),
  [ADD_COMMENT + FAIL]: state => ({
    ...state,
    commentsLoading: false
  }),
  [ADD_COMMENT + DONE]: (state, { payload }) => ({
    ...state,
    commentsLoading: false,
    comments: [
      ...state.comments,
      payload
    ]
  })
}, initialState);
