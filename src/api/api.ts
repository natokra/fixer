import {
    BaseRate,
  RatesApiCallType,
  RatesApiCallTypeRaw,
  SymbolsApiCallType,
} from "./types";

const url = "http://data.fixer.io/api";
const accessKey = "ffcc344a3f31700c0020d166fd17ea96";
const currencies = ["EUR", "USD", "ARS", "BRL"];

export const getRates = (symbols: string) =>
  fetch(
    `${url}/latest?access_key=${accessKey}&symbols=${symbols}`
  ).then((response) =>
    response
      .json()
      .then((data: RatesApiCallTypeRaw) => transformRatesData(data))
  );

export const getSymbols = () =>
  fetch(`${url}/symbols?access_key=${accessKey}`).then((response) =>
    response
      .json()
      .then((data: SymbolsApiCallType) => transformSymbolsData(data))
  );

// this functions is transforming data into nicer and readable code
const transformRatesData = ({
  base,
  rates,
}: RatesApiCallTypeRaw): RatesApiCallType => {
  const result: RatesApiCallType = [];
  const baseRates: BaseRate[] = [{key: "EUR", value: 1}];
  Object.keys(rates).forEach((symbol) => {
    result.push({
      base,
      symbol,
      rate: rates[symbol],
    });
    baseRates.push({ key: symbol, value: rates[symbol] });
  });

  currencies.filter(currency => currency !== "EUR").forEach(baseCurrency => {
    currencies.filter(currency => currency !== baseCurrency).forEach(symbol => {
        const symbolItem = baseRates.find((rate) => rate.key === symbol) as BaseRate
        const baseItem = baseRates.find((rate) => rate.key === baseCurrency) as BaseRate
        result.push({
        base: baseCurrency,
        symbol,
        rate:  symbolItem.value / baseItem.value
    })})
  })
  
  return result;
};

const transformSymbolsData = (data: SymbolsApiCallType) => {
  return {
    symbols: {
      EUR: data.symbols["EUR"],
      ARS: data.symbols["ARS"],
      USD: data.symbols["USD"],
      BRL: data.symbols["BRL"],
    },
  };
};
