import * as actionTypes from './actionTypes';
import axios from '../../API/countries-axios';
import { fetch } from './index';

const fetchFilteredCountriesStart = () => {
  return {
    type: actionTypes.FETCH_FILTERED_COUNTRIES_START
  };
};

const fetchFilteredCountriesSuccess = countries => {
  return {
    type: actionTypes.FETCH_FILTERED_COUNTRIES_SUCCESS,
    countries
  };
};

const setTotalPages = () => {
  return {
    type: actionTypes.SET_TOTAL_PAGES
  };
};

export const fetchFilteredCountries = value => {
  return dispatch => {
    dispatch(fetchFilteredCountriesStart());
    axios
      .get(`/name/${value}`)
      .then(res => {
        dispatch(fetchFilteredCountriesSuccess(res.data));
        dispatch(setTotalPages());
      })
      .catch(err => {
        dispatch(fetch());
      });
  };
};
