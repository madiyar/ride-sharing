import api from 'lib/api';

export const getCities = () => api.get('/cities.json').then(({ data }) => data);
