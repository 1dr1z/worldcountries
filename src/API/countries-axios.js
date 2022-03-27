import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://restcountries.com/v3.1'
});

export default axios;
