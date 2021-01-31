import api from 'lib/api';

// GET_TRIPS
export const getTrips = () => api.get('/trips').then(({ data }) => data);
export const getUserTrips = () => api.get('/user_trips').then(({ data }) => data);

// GET_TRIP
export const getTrip = (id) => api.get(`/trips/${id}`).then(({ data }) => data);
export const getUserTrip = (id) => api.get(`/user_trips/${id}`).then(({ data }) => data);

// ADD_TRIP
export const addTrip = data => api.post(`/trips`, data).then(({ data }) => data);
export const addUserTrip = data => api.post(`/user_trips`, data).then(({ data }) => data);
