import { createAction } from 'redux-actions';
import {
  GET_TRIPS,
  GET_TRIP,
  ADD_TRIP
} from './constants';

export const getTrips = createAction(GET_TRIPS);
export const getTrip = createAction(GET_TRIP);
export const addTrip = createAction(ADD_TRIP);
