import * as actionTypes from './actionTypes';

export const prevPage = () => {
  return {
    type: actionTypes.PREV_PAGE
  };
};

export const nextPage = () => {
  return {
    type: actionTypes.NEXT_PAGE
  };
};
