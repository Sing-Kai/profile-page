import React from "react";
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterItem>
          © {new Date().getFullYear()}
        </FooterItem>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 5vh;
  justify-content: center;
  align-items: center;
`;

const FooterItem = styled.div`
  font-size: 12px;
  color: white;
`;

export default Footer;