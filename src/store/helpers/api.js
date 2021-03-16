import api from 'lib/api';

const resolve = ({ data }) => data;

export const getCities = () => api.get('/cities').then(resolve);

export const authUser = data => api.post(`/users/auth`, data).then(resolve);

export const signUp = data => api.post(`/users`, data).then(resolve);

export const getUser = id => api.get(`/users/${id}`).then(resolve);
