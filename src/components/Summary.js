import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { useSelector } from "react-redux";
const Summary = () => {
  const state = useSelector((state) => state);
  return (
    <Container>
      <ListItems>
        {state.items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ListItems>
      <Total>
        <Line />
        <TextContainer>
          <span>Shipping</span>
          <span>${state.shipping}</span>
        </TextContainer>
        <Line />

        <TextContainer>
          <span>Total</span>
          <span>${state.total}</span>
        </TextContainer>
      </Total>
    </Container>
  );
};

const Container = styled.div`
  grid-area: summary;
  align-self: flex-start;
  margin-top: 25px;

  justify-self: center;
  background: #f2f2f2;
  border-radius: 12px;
  width: 383px;
  height: 535px;
  box-sizing: border-box;
  padding: 30px;
`;
const ListItems = styled.div`
  height: 85%;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 13px;
  }

  ::-webkit-scrollbar-track {
    background: #f2f2f2;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 10px;
    border: 3px solid #f2f2f2;
  }
`;
const Total = styled.div`
  height: 15%;
  width: 100%;
`;

const Line = styled.hr`
  color: #bdbdbd;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  /* Gray 1 */

  color: #333333;
`;
export default Summary;
