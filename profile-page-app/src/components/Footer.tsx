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
  background: ${props => props.theme.colors.neutral};
  padding: 20px 10px 20px 10px;
  display: block;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterItem = styled.div`
  background: ${props => props.theme.colors.neutral};
  padding: 10px;
  text-align: center;
`;

export default Footer;