import React, { createContext, useContext, useEffect, useState } from 'react';

const Crypto = createContext();

const CryptoContext = ({children}) => {
  
  const [currency, setCurrency] = useState("USD");
  const [symbol, setSymbol] = useState("$");

  useEffect(() => {
    if (currency === "USD") setSymbol("$");
    else if (currency === "GBP") setSymbol("£");
    else if (currency === "AUD") setSymbol("AU$");
    else if (currency === "CAD") setSymbol("CA$");
    else if (currency === "INR") setSymbol("₹");
  }, [currency]);

  return (
    <Crypto.Provider value={{currency,symbol,setCurrency}}>{children}</Crypto.Provider>
  )
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
}