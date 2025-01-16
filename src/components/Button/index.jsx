// src/components/Button.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.bgColor || '#00baff'};
  color: ${(props) => props.color || '#fff'};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor || '#0093cc'};
  }
`;

const Button = ({ text, onClick, bgColor, color, hoverColor }) => {
  return (
    <StyledButton
      onClick={onClick}
      bgColor={bgColor}
      color={color}
      hoverColor={hoverColor}
    >
      {text}
    </StyledButton>
  );
};

export default Button;