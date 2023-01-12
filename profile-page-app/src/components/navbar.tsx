import React from "react";
import Link from "next/link";
import styled from 'styled-components';

// import { FaBars } from 'react-icons/fa';
import { NavLink  } from 'react-router-dom';

// const Nav = styled.nav`
//   background: #63D471;
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
//   /* Third Nav */
//   /* justify-content: flex-start; */
// `;
  
// const NavLink = styled(NavLink)`
//   color: #808080;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   &.active {
//     color: #000000;
//   }
// `;
  
// const Bars = styled('')`
//   display: none;
//   color: #808080;
//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 75%);
//     font-size: 1.8rem;
//     cursor: pointer;
//   }
// `;
  
// const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: -24px;
//   /* Second Nav */
//   /* margin-right: 24px; */
//   /* Third Nav */
//   /* width: 100vw;
//   white-space: nowrap; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
  
// const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
  
// const NavBtnLink = styled(NavLink)`
//   border-radius: 4px;
//   background: #808080;
//   padding: 10px 22px;
//   color: #000000;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #808080;
//   }
// `;

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