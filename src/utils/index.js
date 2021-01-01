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
