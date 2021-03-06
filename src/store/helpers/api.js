import api from 'lib/api';

const resolve = ({ data }) => data;

export const getCities = () => api.get('/cities').then(resolve);

export const authUser = data => api.post(`/users/auth`, data).then(resolve);

export const signUp = data => api.post(`/users`, data).then(resolve);

export const getUser = id => api.get(`/users/${id}`).then(resolve);

export const uploadPhoto = ({ id, data }) => api.post(`/users/image/${id}`, data).then(resolve);

export const getComments = ({ type, targetId }) => api.get(`/comments/${type}/${targetId}`).then(resolve);

export const deleteComment = id => api.delete(`/comments/${id}`).then(resolve);

export const addComment = data => api.post(`/comments`, data).then(resolve);
