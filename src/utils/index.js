export const formatCurrency = (
  value,
  country = "pt-br",
  currencyFormat = "BRL"
) => {
  return new Intl.NumberFormat(country, {
    style: "currency",
    currency: currencyFormat,
  }).format(value);
};

export const capitalize = (value) => {
  if (typeof value !== "string") {
    return "";
  }
  console.log(value);
};
