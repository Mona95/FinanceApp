import axios from "axios";
import * as actionTypes from "../actionTypes";

export const setCurrencyRates = (rates) => ({
  type: actionTypes.SET_CURRENCY_RATES,
  payload: { rates },
});

export function fetchCurrencyRates() {
  return (dispatch) => {
    return axios
      .get(
        "http://data.fixer.io/api/latest?access_key=82825661275378a9123df69159c5e7f3"
      )
      .then(({ data }) => {
        dispatch(setCurrencyRates(data.rates));
      });
  };
}
