import * as actionTypes from './actionTypes';
import axios from '../../API/countries-axios';
import { fetch } from './index';

const fetchFilteredRegionStart = () => {
  return {
    type: actionTypes.FETCH_FILTERED_REGION_START
  };
};

const fetchFilteredRegionSuccess = countries => {
  return {
    type: actionTypes.FETCH_FILTERED_REGION_SUCCESS,
    countries
  };
};

const setTotalPages = () => {
  return {
    type: actionTypes.SET_TOTAL_PAGES
  };
};

export const fetchSelectedRegion = region => {
  return dispatch => {
    dispatch(fetchFilteredRegionStart());
    if (region === 'all') {
      dispatch(fetch());
    } else {
      axios
        .get(`/region/${region}`)
        .then(res => {
          dispatch(fetchFilteredRegionSuccess(res.data));
          dispatch(setTotalPages());
        })
        .catch(err => {
          dispatch(fetch());
        });
    }
  };
};
