import * as actionTypes from "./actionTypes";

export const addFCard = (cardData) => ({
  type: actionTypes.ADD_FCARD,
  payload: cardData,
});

export const updateFCard = (cardName, updatedData) => ({
  type: actionTypes.UPDATE_FCARD,
  payload: {
    cardName,
    updatedData,
  },
});

export const deleteFCard = (cardName) => ({
  type: actionTypes.DELETE_FCARD,
  payload: cardName,
});

export const filterFCards = (searchStr) => ({
  type: actionTypes.FILTER_FCARDS,
  payload: searchStr,
});

export const increaseTotal = (totalType, amount) => ({
  type: actionTypes.INCREASE_TOTAL,
  payload: {
    totalType,
    amount,
  },
});

export const decreaseTotal = (totalType, amount) => ({
  type: actionTypes.DECREASE_TOTAL,
  payload: {
    totalType,
    amount,
  },
});
