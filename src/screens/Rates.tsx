import { Table } from "../components"
import styled from "styled-components";

export const Rates = () => {
  return (
    <Container>
      <Table/>
    </Container>
  );
};

const Container = styled.div({
  padding: "24px",
});