// export const CoinList = (currency = "inr") =>
//   `http://localhost:3000/api/getTop100?currency=${currency}`;
export const CoinList = (currency = "inr") =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const ConvertPrice = (id, currency, amount = 0) =>
  `http://localhost:3000/api/getTop100?id=${id}&currency=${currency}&amount=${amount}`;
