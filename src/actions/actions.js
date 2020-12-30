import * as actionTypes from "./actionTypes";

export const addFCard = (cardData) => ({
  type: actionTypes.ADD_FCARD,
  payload: cardData,
});
