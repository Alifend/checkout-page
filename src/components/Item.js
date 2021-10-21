import React from "react";
import { useDispatch } from "react-redux";

import styled from "styled-components";
import { editQuantityItem } from "../store/itemAction";

const Item = ({ image, name, price, discount, quantity }) => {
  const dispatch = useDispatch();

  const onChange = (name, quantity) => {
    dispatch(editQuantityItem({ name, quantity }));
  };
  return (
    <Container>
      <Image src={image} />
      <Info>
        <Name>{name}</Name>
        <PurchaseInfo>
          <Price>${price}</Price>
          <Discount>${discount}</Discount>
        </PurchaseInfo>
        <Counter>
          <Button onClick={() => onChange(name, -1)}>-</Button>
          {quantity}
          <Button onClick={() => onChange(name, 1)}>+</Button>
        </Counter>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding-top: 33px;
  padding-right: 33px;
`;

const Image = styled.img`
  width: 135px;
  height: 135px;
  object-fit: cover;
  border-radius: 15px;
`;

const PurchaseInfo = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Info = styled.div`
  height: 135px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`;

const Name = styled.p``;
const Price = styled.span`
  color: #f2994a;
  font-size: 16px;
`;
const Discount = styled.span`
  font-size: 14px;
  text-decoration: line-through;
`;
const Counter = styled.div`
  border-radius: 12px;
  border: 1px solid #828282;
  width: 134px;
  height: 52px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: flex-end;
`;
const Button = styled.button`
  height: 21px;
  width: 21px;
  background: #e0e0e0;
  border-radius: 4px;
  border: none;
  color: #828282;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  :hover {
    filter: opacity(0.7);
  }
`;

export default Item;
