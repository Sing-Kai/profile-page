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
  display: flex;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 10vh;
  justify-content: center;
  align-items: center;
`;

const FooterItem = styled.div`
  /* background: ${props => props.theme.colors.neutral}; */
  /* background: black; */
  /* padding: 10px; */
  /* text-align: center;
  vertical-align: middle; */
`;

export default Footer;