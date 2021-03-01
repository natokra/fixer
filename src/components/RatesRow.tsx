import styled from "styled-components";
import { Icon } from "./"

type RatesRowProps = {
  base: string;
  rate: number;
  symbol: string;
};

export const RatesRow = ({ base, rate, symbol }: RatesRowProps) => {
  return (
    <Container>
      <Base><Icon symbol={base} />{`${base} 1`}</Base>
      <Rate><Icon symbol={symbol} /> {`${symbol} ${rate.toFixed(4)}`}</Rate>
      <FeePercent>{`%${(1 / rate).toFixed(4)}`}</FeePercent>
    </Container>
  );
};

const Container = styled.div({
    display: "grid",
    gridAutoFlow: "column",
    gap: "48px",
    gridAutoColumns: "1fr",
    justifyItems: "center",
    alignSelf: "center",
    paddingTop: "10px",  
    height: "40px"
});

const Base = styled.div({
    display: "flex",
    gap: "8px"
});

const Rate = styled.div({
    display: "flex",
    gap: "8px",
    width: "150px"
});

const FeePercent = styled.div({});
