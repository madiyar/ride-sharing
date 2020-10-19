import axios from 'axios';
const { REACT_APP_API_URL: baseURL } = process.env;

export default axios.create({
  baseURL,
  responseType: 'json',
  // headers
});
