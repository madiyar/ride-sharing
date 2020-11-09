import { createAction } from 'redux-actions';
import {
  GET_TRIPS
} from './constants';

export const getTrips = createAction(GET_TRIPS);
