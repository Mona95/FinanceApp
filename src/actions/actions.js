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
