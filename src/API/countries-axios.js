import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://restcountries.eu/rest/v2'
});

export default axios;
