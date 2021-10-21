import React from "react";
import styled from "styled-components";
import {
  FaBuilding,
  FaEnvelope,
  FaGlobeAmericas,
  FaHome,
  FaMailBulk,
  FaPhoneAlt,
  FaUserCircle,
} from "react-icons/fa";
const CheckoutForm = () => {
  return (
    <Container>
      <Subtitle>Contact Information</Subtitle>
      <Name>E-mail</Name>
      <InputContainer>
        <FaEnvelope />
        <Input placeholder="Enter your email" />
      </InputContainer>
      <Name>Phone</Name>
      <InputContainer>
        <FaPhoneAlt />
        <Input placeholder="Enter your phone..." />
      </InputContainer>
      <Subtitle>Shipping Address</Subtitle>
      <Name>Full Name</Name>
      <InputContainer>
        <FaUserCircle />
        <Input />
      </InputContainer>
      <Name>Address</Name>
      <InputContainer>
        <FaHome />
        <Input placeholder="Enter your address..." />
      </InputContainer>
      <Name>City</Name>
      <InputContainer>
        <FaBuilding />
        <Input placeholder="Your city" />
      </InputContainer>
      <CountryPostalContainer>
        <SubContainer>
          <Name>Contry</Name>
          <InputContainer>
            <FaGlobeAmericas />
            <Input placeholder="Your country..." />
          </InputContainer>
        </SubContainer>
        <SubContainer>
          <Name>Postal code</Name>
          <InputContainer>
            <FaMailBulk />
            <Input placeholder="Your postal code..." />
          </InputContainer>
        </SubContainer>
      </CountryPostalContainer>
      <CheckContainer>
        <input
          type="checkbox"
          style={{ height: "21px", width: "21px", marginRight: "11px" }}
        />
        <span>Save this information for next time</span>
      </CheckContainer>
      <Button>Continue</Button>
    </Container>
  );
};

const Container = styled.div`
  grid-area: checkoutform;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: clamp(360px, 100%, 500px);
`;

const CheckContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const CountryPostalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
`;
const Input = styled.input`
  margin-left: 18px;
  width: 80%;
  border: none;
  :focus {
    outline: none;
  }
  font-size: 16px;
  line-height: 20px;
  color: #828282;
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Name = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: #4f4f4f;
`;

const InputContainer = styled.div`
  border: 1px solid #828282;
  border-radius: 12px;
  width: 100%;
  padding-top: 17px;
  padding-bottom: 17px;
  margin-bottom: 20px;
  margin-top: 5px;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 16px;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  background: #f2994a;
  border-radius: 12px;
  color: white;
  font-size: 16px;
  padding: 17px 45px;
  border: none;
  align-self: flex-end;
  margin-top: 20px;
  cursor: pointer;
  transition: filter 0.3s ease;
  :hover {
    filter: opacity(0.7);
  }
`;
export default CheckoutForm;
