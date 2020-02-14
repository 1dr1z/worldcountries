import { combineReducers } from 'redux';
import { countriesReducer } from './countries';
import { countryReducer } from './country';
import { themeReducer } from './theme';

export const rootReducer = combineReducers({
  countries: countriesReducer,
  country: countryReducer,
  theme: themeReducer
});
