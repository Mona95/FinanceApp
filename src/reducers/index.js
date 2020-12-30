import * as actionTypes from "../actions/actionTypes";

const initState = {
  fCards: [],
  totalIncome: 0,
  totalExpense: 0,
};

export const rootReducer = (state = initState, action) => {
  let fCards;
  switch (action.type) {
    case actionTypes.ADD_FCARD:
      return { ...state, fCards: [action.payload, ...state.fCards] };
    case actionTypes.UPDATE_FCARD:
      fCards = state.fCards.map((fCard) => {
        if (fCard.name === action.payload.cardName) {
          return { ...fCard, ...action.payload.updatedData };
        }
        return fCard;
      });
      return {
        ...state,
        fCards,
      };
    default:
      return state;
  }
};
