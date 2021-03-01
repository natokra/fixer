import { useEffect, useState } from "react";
import styled from "styled-components";
import { getRates } from "../api";
import { getSymbols } from "../api/api";
import { RatesApiCallType, SymbolsApiCallType } from "../api/types";
import { RatesRow, TableHeader, Currency } from "../components";

export const Table = () => {
  const [rates, setRates] = useState<RatesApiCallType>([]);
  const [symbols, setSymbols] = useState<SymbolsApiCallType["symbols"]>({});
  const [selected, setSelected] = useState("EUR");

  useEffect(() => {
    getRates(["ARS", "BRL", "USD"].join(",")).then((response) =>
      setRates(response)
    );
    getSymbols().then((response) => setSymbols(response.symbols));
  }, []);

  return (
    <Container>
      <Title>Fixer Rates</Title>
      <Description>This rates are granted by Fixer.</Description>
      <TableContainer>
        <CurrencyContainer>
          <CurrencyText>Select a currency </CurrencyText>
          <Currency
            symbols={symbols}
            selected={selected}
            setSelected={setSelected}
          />
        </CurrencyContainer>
        <TableHeader />
        <TableBody>
          {rates.filter(rate => rate.base === selected).map((rate) => (
            <RatesRow rate={rate.rate} base={rate.base} symbol={rate.symbol} />
          ))}
        </TableBody>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div({
  padding: "24px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "rgb(0 0 0 / 20%) 0px 2px 5px 0px",
});

const Title = styled.h1({});

const Description = styled.h3({});

const TableBody = styled.div({
  display: "grid",
  gridAutoRows: "40px",
  "& > div:nth-of-type(odd)": {
    backgroundColor: "rgb(250, 250, 250)",
  },
  "& > div:nth-of-type(even)": {
    backgroundColor: "rgb(245, 245, 245)",
  },
});

const TableContainer = styled.div({
  width: "800px",
  padding: "20px",
  boxShadow: "rgb(0 0 0 / 20%) 0px 2px 5px 0px",
});

const CurrencyContainer = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  paddingBottom: "20px",
  gap: "12px",
});

const CurrencyText = styled.span({
  alignSelf: "center",
});
