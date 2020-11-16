import api from 'lib/api';

export const getTrips = () => api.get('/trips').then(({ data }) => data);

export const getTrip = (id) => api.get(`/trips/${id}`).then(({ data }) => data);
