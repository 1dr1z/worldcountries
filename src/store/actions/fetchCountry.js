import * as actionTypes from './actionTypes';
import axios from '../../API/countries-axios';

const fetchCountryStart = () => {
  return {
    type: actionTypes.FETCH_COUNTRY_START
  };
};

const fetchCountrySuccess = country => {
  return {
    type: actionTypes.FETCH_COUNTRY_SUCCESS,
    country
  };
};
const fetchCountryFail = error => {
  return {
    type: actionTypes.FETCH_COUNTRY_SUCCESS,
    error
  };
};

export const fetchCountry = value => {
  return dispatch => {
    dispatch(fetchCountryStart());
    axios
      .get(`/alpha${value}`)
      .then(res => {
        dispatch(fetchCountrySuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchCountryFail(err));
      });
  };
};
