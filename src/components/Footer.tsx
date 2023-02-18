import React from "react";
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterItem>
          © {new Date().getFullYear()} - Sing-Kai Chiu
        </FooterItem>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 4vh;
  justify-content: center;
  align-items: center;
`;

const FooterItem = styled.div`
  font-size: 12px
`;

export default Footer;