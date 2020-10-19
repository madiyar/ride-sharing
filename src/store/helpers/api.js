import api from 'lib/api';

export const getCities = () => {
  api.get('').then(({ data }) => data);
};
