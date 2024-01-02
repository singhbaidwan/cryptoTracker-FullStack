export const CoinList = (currency = "inr") =>
  `https://cryptotracker-nrm8.onrender.com/api/getTop100?currency=${currency}`;

export const ConvertPrice = (id, currency, amount = 0) =>
  `https://cryptotracker-nrm8.onrender.com?id=${id}&currency=${currency}&amount=${amount}`;
