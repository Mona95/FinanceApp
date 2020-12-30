import * as actionTypes from "../actions/actionTypes";

const initState = {
  fCards: [],
  totalIncome: 0,
  totalExpense: 0,
};

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FCARD:
      return { ...state, fCards: [action.payload, ...state.fCards] };
    default:
      return state;
  }
};
