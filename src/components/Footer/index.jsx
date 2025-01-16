// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #141414;
  color: #00baff;
  text-align: center;
  padding: 20px;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>ALURAFLIX - Todos os direitos reservados</p>
    </FooterContainer>
  );
};

export default Footer;

