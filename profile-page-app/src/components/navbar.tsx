import React from "react";
import Link from "next/link";
import styled from 'styled-components';

const NavBar = () => {
    return (
      <NavBarContainer>
        <NavBarItems>
          <TitleContainer>
          Sing-Kai
          </TitleContainer>
          <NavBarItem>
            <Link href='/'>
              Home
            </Link>
          </NavBarItem>

          <NavBarItem>
            <Link href='/skills'>
              Skills
            </Link>
          </NavBarItem>

          <NavBarItem>
            <Link href='/about'>
              About
            </Link>
          </NavBarItem>
        </NavBarItems>
      </NavBarContainer>
    )
}

const NavBarContainer = styled.div`
  background: ${props => props.theme.colors.neutral};
  padding: 10px;
`;

const NavBarItems = styled.ul`
  background: ${props => props.theme.colors.carbon};;
  color: white;
  padding: 10px;
  list-style-type: none;
  display: flex;
  align-items: baseline;
`;

const NavBarItem = styled.li`
  padding: 5px;
  margin: 5px;
`;

const TitleContainer = styled.div`
  padding: 5px;
  margin: 5px;
  margin-right: auto;
  font-size: 30px;
`;

export default NavBar