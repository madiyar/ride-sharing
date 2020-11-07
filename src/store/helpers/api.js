import api from 'lib/api';

export const getCities = () => api.get('/cities').then(({ data }) => data);
