import * as actionTypes from '../actions/actionTypes';

const initialState = {
  countries: [],
  loading: false,
  error: null,
  currentPage: 1,
  numberOfDisplayedItems: 10,
  totalPages: null
};

export const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COUNTRIES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.countries,
        totalPages: null,
        currentPage: 1,
        loading: false
      };
    case actionTypes.SET_TOTAL_PAGES:
      let tempLength = Math.ceil(
        state.countries.length / state.numberOfDisplayedItems
      );

      return {
        ...state,
        totalPages: parseInt(tempLength)
      };
    case actionTypes.FETCH_COUNTRIES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.err
      };
    case actionTypes.FETCH_FILTERED_COUNTRIES_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_FILTERED_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: action.countries,
        totalPages: null,
        currentPage: 1,
        loading: false
      };
    case actionTypes.FETCH_FILTERED_REGION_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.FETCH_FILTERED_REGION_SUCCESS:
      return {
        ...state,
        countries: action.countries,
        totalPages: null,
        currentPage: 1,
        loading: false
      };
    case actionTypes.PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1
      };
    case actionTypes.NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      };

    default:
      return state;
  }
};
