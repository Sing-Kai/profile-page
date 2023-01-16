import React from "react";
import Link from "next/link";
import styled from 'styled-components';

const NavBar = () => {
    return (
      <NavBarContainer>
        <NavBarItems>
          <TitleContainer>
          Sing-Kai, check this sticks when scrolling
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
  background: pink;
  padding: 10px;
`;

const NavBarItems = styled.ul`
  background: grey;
  color: white;
  padding: 10px;
  list-style-type: none;
  display: flex;
`;

const NavBarItem = styled.li`
  padding: 5px;
  margin: 5px;
`;

const TitleContainer = styled.div`
  background: red;
  padding: 5px;
  margin: 5px;
  margin-right: auto;
`;

export default NavBar