import api from 'lib/api';

export const getTrips = () => api.get('/trips').then(({ data }) => data);
