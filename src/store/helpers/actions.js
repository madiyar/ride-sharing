import { createAction } from 'redux-actions';
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

export const getCities = createAction(GET_CITIES);
export const authUser = createAction(AUTH_USER);
export const signUp = createAction(SIGN_UP);
export const getUser = createAction(GET_USER);
export const setError = createAction(SET_ERROR);
export const uploadCarPhoto = createAction(UPLOAD_CAR_PHOTO);
export const getComments = createAction(GET_COMMENTS);
export const deleteComment = createAction(DELETE_COMMENT);
export const addComment = createAction(ADD_COMMENT);
