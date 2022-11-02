import React from "react";
import styled from "styled-components";

const PrimaryButton = ({ text, onClick, disabled = false }) => {
  return (
    <ButtonWrapper onClick={onClick} disabled={disabled}>
      <Title>{text}</Title>
    </ButtonWrapper>
  );
};

export default PrimaryButton;

const ButtonWrapper = styled.button`
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 50px;
  height: 40px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 4rem;
  cursor: pointer;

  :hover {
    background: #fff;
    transition: 0.5s;
    color: #ff5802;
  }
  :disabled {
    transform: none;
    cursor: not-allowed;
  }
`;

const Title = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 12px;
  color: #ffffff;
`;
