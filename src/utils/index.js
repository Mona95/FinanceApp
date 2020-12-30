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

export const isEmpty = (array) => {
  return array.length === 0;
};
