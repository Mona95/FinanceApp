//render the list of currencies, that has been used in the app
export const currencyLists = () => {
  return [
    {
      value: "USD",
      label: "USD($)",
    },
    {
      value: "EUR",
      label: "EUR(€)",
    },
    {
      value: "JPY",
      label: "JPY(¥)",
    },
    {
      value: "TRY",
      label: "TRY(₺)",
    },
  ];
};

//render the currency symbol according to the give currency
export const renderCurrencySymbol = (currency) => {
  let symbols = {
    USD: "$",
    EUR: "€",
    JPY: "¥",
    TRY: "₺",
  };
  return symbols[currency];
};

//check whether the provided array is empty or not
export const isEmpty = (array) => {
  return array.length === 0;
};

//check availability of a value among a source object
export const isAvailable = (source, value) => {
  return source.toString().toLowerCase().includes(value.toLowerCase());
};

//convert the updated amount to the base currency(EUR) if needed
// ****** Method will use `Math.round` in order to have a more clear amount for totalIncome/totalExpense
export const convertTotalAmount = (state, currAmount, currency) => {
  if (currAmount !== 0 && currency !== "EUR") {
    currAmount = parseFloat(
      Math.round(currAmount / state[currency]).toFixed(4)
    );
  }
  return currAmount;
};

//Increasing the amount of totalIncome/totalExpense
export const incTotalAmount = (state, totalType, increasedAmount) => {
  let finalAmount;
  finalAmount =
    totalType === "expense"
      ? {
          totalExpense: state.totalExpense + increasedAmount,
        }
      : {
          totalIncome: state.totalIncome + increasedAmount,
        };

  return finalAmount;
};

//Decreasing the amount of totalIncome/totalExpense
export const decTotalAmount = (state, totalType, decreasedAmount) => {
  let finalAmount;
  finalAmount =
    totalType === "expense"
      ? {
          totalExpense: state.totalExpense - decreasedAmount,
        }
      : {
          totalIncome: state.totalIncome - decreasedAmount,
        };

  return finalAmount;
};
