import { createAction } from 'redux-actions';
import {
  GET_TRIPS,
  GET_TRIP
} from './constants';

export const getTrips = createAction(GET_TRIPS);
export const getTrip = createAction(GET_TRIP);
