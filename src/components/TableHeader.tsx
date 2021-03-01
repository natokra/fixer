import styled from "styled-components";


export const TableHeader = () => {

    return <Container>
        {["From Currency", "To Currency", "Fee Percent"].map(text => <HeaderText>{text}</HeaderText>)}
    </Container>
}

const Container = styled.div({
    display: "grid",
    gridAutoFlow: "column",
    gap: "48px",
    gridAutoColumns: "1fr",
    justifyItems: "center",
    backgroundColor: "rgb(219, 219, 219)",
    height: "32px",
    paddingTop: "12px"
})

const HeaderText = styled.div({})