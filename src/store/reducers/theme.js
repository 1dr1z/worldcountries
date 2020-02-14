import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLightModeOn: true
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return {
        ...state,
        isLightModeOn: !state.isLightModeOn
      };
    default:
      return state;
  }
};
