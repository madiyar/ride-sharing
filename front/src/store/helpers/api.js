import api from 'lib/api';

const resolve = ({ data }) => data;

export const getCities = () => api.get('/cities').then(resolve);

export const authUser = data => api.post(`/users/auth`, data).then(resolve);
