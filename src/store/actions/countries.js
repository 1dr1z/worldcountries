import * as actionTypes from './actionTypes';
import axios from '../../API/countries-axios';

const fetchCountriesStart = () => {
  return {
    type: actionTypes.FETCH_COUNTRIES_START
  };
};

const fetchCountriesFail = err => {
  return {
    type: actionTypes.FETCH_COUNTRIES_FAIL,
    err
  };
};

const fetchCountriesSuccess = countries => {
  return {
    type: actionTypes.FETCH_COUNTRIES_SUCCESS,
    countries
  };
};

const setTotalPages = () => {
  return {
    type: actionTypes.SET_TOTAL_PAGES
  };
};
export const fetch = () => {
  return dispatch => {
    dispatch(fetchCountriesStart());
    axios
      .get('/all')
      .then(res => {
        dispatch(fetchCountriesSuccess(res.data));
        dispatch(setTotalPages());
      })
      .catch(err => {
        dispatch(fetchCountriesFail(err));
      });
  };
};
