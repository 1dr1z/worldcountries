import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  country: null
};

export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COUNTRY_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        country: action.country,
        loading: false
      };
    case actionTypes.FETCH_COUNTRY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};
