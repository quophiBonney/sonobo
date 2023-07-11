import React, {useState, useEffect} from "react";
import ConvertorHero from "./CovertorHero";
import CurrencyRow from "./CurrencyRow";
const BASE_URL =
  "https://api.fastforex.io/fetch-all?api_key=208096dde9-53b296a399-rxlw7z";
const Convertor = () => {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = 0;
    toAmount = amount * exchangeRate;
  } else {
    fromAmount = amount / exchangeRate;
  }
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstcurrency = Object.keys(data.results)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.results)]);
        setFromCurrency(data.base);
        setToCurrency(firstcurrency);
        setExchangeRate(data.results[firstcurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&${toCurrency}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.results[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }
  return (
    <div>
      <div className="container-fluid home-hero">
        <ConvertorHero />
        <div className="d-flex bg-light text-dark"></div>
      </div>
    </div>
  );
};

export default Convertor;
