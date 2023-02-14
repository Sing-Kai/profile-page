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
  /* background: ${props => props.theme.colors.neutral}; */
  background: red;
  /* padding: 20px 10px 20px 10px; */
  display: block;
  /* position: fixed; */
  bottom: 0;
  width: 100%;
  border-top: purple;
  border-width: 1px;
`;

const FooterItem = styled.div`
  /* background: ${props => props.theme.colors.neutral}; */
  background: red;
  padding: 10px;
  text-align: center;
`;

export default Footer;