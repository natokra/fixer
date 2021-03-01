import styled from "styled-components";
import { SymbolsApiCallType } from "../api/types";
import {Icon} from "./"

type CurrencyProps = {
  symbols: SymbolsApiCallType["symbols"];
  selected: string;
  setSelected: (value: string) => void
};

export const Currency = ({ symbols, selected, setSelected }: CurrencyProps) => {
  return (
    <Container>
      {Object.keys(symbols).map((symbol) => (
        <SymbolButton
          selected={symbol === selected}
          onClick={() => setSelected(symbol)}
        >
          <Icon symbol={symbol} />{symbol}
        </SymbolButton>
      ))}
    </Container>
  );
};

const Container = styled.div({
  display: "flex",
  gap: "8px"
});

type SelectedProps = {
  selected: boolean;
};

const SymbolButton = styled.button<SelectedProps>(({ selected }) => ({
  border: selected ? "2px solid" : "1px solid",
  borderColor: selected ? "#4194D8" : "black",
  padding: "4px",
  backgroundColor: "white",
  borderRadius: "4px",
  outline: "none",
  width: "55px"
}));
