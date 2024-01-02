import { createContext, useContext, useEffect, useState } from "react";
import { currencyData } from "./constants/CurrencyData";
const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    let value = currencyData.find((data) => {
      // console.log(data);
      return data.code == currency;
    });
    // console.log(value);
    setSymbol(value.symbol);
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
