// src/components/TextField.js
import React from 'react';
import styled from 'styled-components';

const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;

  label {
    margin-bottom: 5px;
    color: #fff;
    font-size: 14px;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const TextField = ({ label, placeholder, value, onChange }) => {
  return (
    <TextFieldContainer>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </TextFieldContainer>
  );
};
