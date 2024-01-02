export const CoinList = (currency = "inr") =>
  `http://localhost:3000/api/getTop100?currency=${currency}`;

export const ConvertPrice = (id, currency, amount = 0) =>
  `http://localhost:3000/api/convertPrice?id=${id}&currency=${currency.toLowerCase()}&amount=${amount}`;
