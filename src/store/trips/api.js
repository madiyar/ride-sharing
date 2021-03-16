import api from 'lib/api';

const resolve = ({ data }) => data;

// GET_TRIPS
export const getTrips = params => api.get('/trips', { params }).then(resolve);
export const getUserTrips = params => api.get('/user_trips', { params }).then(resolve);

// GET_TRIP
export const getTrip = (id) => api.get(`/trips/${id}`).then(resolve);
export const getUserTrip = (id) => api.get(`/user_trips/${id}`).then(resolve);

// ADD_TRIP
export const addTrip = data => api.post(`/trips`, data).then(resolve);
export const addUserTrip = data => api.post(`/user_trips`, data).then(resolve);

// BE PASSENGER
export const addPassenger = data => api.post(`/passengers`, data).then(resolve);
