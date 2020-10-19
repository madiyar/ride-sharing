import { createAction } from 'redux-actions';
import {
  GET_CITIES
} from './constants';

export const getCities = createAction(GET_CITIES);
