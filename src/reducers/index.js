import * as actionTypes from "../actions/actionTypes";
import {
  isEmpty,
  isAvailable,
  convertTotalAmount,
  incTotalAmount,
  decTotalAmount,
} from "../utils";

const initState = {
  fCards: [],
  filteredFCards: [],
  searchedValue: "",
  totalIncome: 0,
  totalExpense: 0,
  EUR: 1,
  USD: 0,
  JPY: 0,
  TRY: 0,
};

export const rootReducer = (state = initState, action) => {
  let updatedState, fCards, filteredFCards;

  switch (action.type) {
    //Fetch and set the currency rates' values
    case actionTypes.SET_CURRENCY_RATES:
      return {
        ...state,
        USD: action.payload.rates.USD.toFixed(4),
        JPY: action.payload.rates.JPY.toFixed(4),
        TRY: action.payload.rates.TRY.toFixed(4),
      };

    //Adding Finance Card to fCards
    case actionTypes.ADD_FCARD:
      return { ...state, fCards: [action.payload, ...state.fCards] };

    //Updating current Finance Card and save the updated version in the fCards
    case actionTypes.UPDATE_FCARD:
      fCards = state.fCards.map((fCard) => {
        if (fCard.name === action.payload.cardName) {
          return { ...fCard, ...action.payload.updatedData };
        }
        return fCard;
      });
      updatedState = { ...state, fCards };
      if (!isEmpty(state.filteredFCards)) {
        filteredFCards = state.filteredFCards.map((filteredFCard) => {
          if (filteredFCard.name === action.payload.cardName) {
            return { ...filteredFCard, ...action.payload.updatedData };
          }
          return filteredFCard;
        });
        updatedState = { ...updatedState, filteredFCards };
      }

      return updatedState;

    //Deleting the current selected Finance Card
    case actionTypes.DELETE_FCARD:
      fCards = state.fCards.filter((fCard) => {
        return fCard.name !== action.payload;
      });
      updatedState = { ...state, fCards };
      if (!isEmpty(state.filteredFCards)) {
        filteredFCards = state.filteredFCards.filter((filteredFCard) => {
          return filteredFCard.name !== action.payload;
        });
        updatedState = { ...updatedState, filteredFCards };
      }
      return updatedState;

    //Filtering the Finance Cards according to the searched value
    case actionTypes.FILTER_FCARDS:
      let newState = Object.assign({}, state);
      let value = action.payload;
      let filteredValues = newState.fCards.filter((fCard) => {
        return (
          isAvailable(fCard.expense, value) ||
          isAvailable(fCard.income, value) ||
          isAvailable(fCard.currency, value)
        );
      });
      return {
        ...state,
        filteredFCards: filteredValues,
        searchedValue: value,
      };

    //Increasing the amount of totalIncome/totalExpense
    case actionTypes.INCREASE_TOTAL:
      let increasedAmount = parseInt(action.payload.amount || 0);
      increasedAmount = convertTotalAmount(
        state,
        increasedAmount,
        action.payload.currency
      );
      let increasedTotal = incTotalAmount(
        state,
        action.payload.totalType,
        increasedAmount
      );
      return {
        ...state,
        ...increasedTotal,
      };

    //Decreasing the amount of totalIncome/totalExpense
    case actionTypes.DECREASE_TOTAL:
      let decreasedAmount = parseInt(action.payload.amount || 0);
      decreasedAmount = convertTotalAmount(
        state,
        decreasedAmount,
        action.payload.currency
      );
      let decreasedTotal = decTotalAmount(
        state,
        action.payload.totalType,
        decreasedAmount
      );
      return {
        ...state,
        ...decreasedTotal,
      };

    default:
      return state;
  }
};
