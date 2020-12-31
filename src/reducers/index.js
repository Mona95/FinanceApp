import * as actionTypes from "../actions/actionTypes";

const initState = {
  fCards: [],
  filteredFCards: [],
  searchedValue: "",
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
    case actionTypes.DELETE_FCARD:
      fCards = state.fCards.filter((fCard) => {
        return fCard.name !== action.payload;
      });
      return {
        ...state,
        fCards,
      };
    case actionTypes.FILTER_FCARDS:
      let newState = Object.assign({}, state);
      let value = action.payload;
      let filteredValues = newState.fCards.filter((fCard) => {
        return (
          fCard.expense.toLowerCase().includes(value.toLowerCase()) ||
          fCard.income.toLowerCase().includes(value.toLowerCase()) ||
          fCard.currency.toLowerCase().includes(value.toLowerCase())
        );
      });
      return {
        ...state,
        filteredFCards: filteredValues,
        searchedValue: value,
      };
    case actionTypes.INCREASE_TOTAL:
      let increasedTotal =
        action.payload.totalType === "expense"
          ? {
              totalExpense:
                state.totalExpense + parseInt(action.payload.amount),
            }
          : {
              totalIncome: state.totalIncome + parseInt(action.payload.amount),
            };
      return {
        ...state,
        ...increasedTotal,
      };
    case actionTypes.DECREASE_TOTAL:
      let decreasedTotal =
        action.payload.totalType === "expense"
          ? {
              totalExpense:
                state.totalExpense - parseInt(action.payload.amount),
            }
          : {
              totalIncome: state.totalIncome - parseInt(action.payload.amount),
            };
      return {
        ...state,
        ...decreasedTotal,
      };
    default:
      return state;
  }
};
