import React from "react";
import styled from "styled-components";
import CheckoutForm from "../components/CheckoutForm";
import Summary from "../components/Summary";
import data from "../data";
const CheckOutPage = () => {
  return (
    <Container>
      <Content>
        <TextContainer>
          <Title>Checkout </Title>
        </TextContainer>
        <CheckoutForm />
        <Summary data={data} />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextContainer = styled.div`
  grid-area: title;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const Title = styled.p`
  font-size: 36px;
  line-height: 44px;
  color: #4e5150;
  margin-bottom: 30px;
  margin-top: 44px;
`;

const Content = styled.div`
  height: 95vh;

  display: grid;
  grid-template-rows: 10% 90%;
  grid-template-columns: 20% 30% 0% 30% 20%;
  grid-template-areas:
    ".  title . . . "
    ". checkoutform . summary . ";

  @media (max-width: 992px) {
    grid-template-areas:
      "title"
      "summary"
      "checkoutform";
    grid-template-rows: auto auto auto;
    grid-template-columns: 100%;
    place-items: center;
  }
  @media (min-width: 992px) and (max-width: 1400px) {
    grid-template-columns: 5% 42.5% 5% 42.5% 5%;
  }
`;

export default CheckOutPage;
