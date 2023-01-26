import React from 'react'
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
const Nav = () =>{
  return (
    <>
      <NavContainer className="nav">
        <NavItem>
            <LinkItem href="" target = "_blank">
              <FontAwesomeIcon icon={faHouse} size="2x"/>
              <div className = "circle"></div>
              <TitleContainer>
                <div className = "title">Home</div>
              </TitleContainer>
            </LinkItem>
        </NavItem>
        
        <NavItem>
            <LinkItem href="" target = "_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>  
            <div className = "circle"></div>
            <div className = "title">LinkedIn</div>
            </LinkItem>
        </NavItem>
        
        <NavItem>
            <LinkItem href="" target = "_blank">
              <FontAwesomeIcon icon={faGithub} size="2x"/>  
              <div className = "circle"></div>
              <div className = "title">GitHub</div>
            </LinkItem>
        </NavItem>
        
        <div className="background"></div>

      </NavContainer>
    </>
  )
}

const NavContainer = styled.ul`
  padding: 0px;
  width: 640px;
  margin: 100px auto auto auto;
  list-style-type: none;
`

const NavItem = styled.li`
  padding: 30px;
  float:left;
  width: 100px;
  text-align:center;
  font-size:15px;
  color:black;
  text-decoration:none;
  background-color: black;
`
const illuminate = keyframes`
  0% {
    transform: scale(.7, .7);
    opacity: 0.7;
  }
  50% {
    opacity: 0.3;
  }
  100%{
    transform: scale(1.15);
    opacity: 0;
  }
`

const TitleContainer = styled.div`
  font-size:0px;
  color: red;
  &:hover .title{
    transform: translateY(-10px);
    font-size: 15px;
    transition: .5s;
    /* color: #edf5e1; */
    color: red;
  }
`

const LinkItem = styled.a`
  /* padding: 30px; */
  float:left;
  width: 100px;
  text-align:center;
  font-size:15px;
  color: #edf5e1;
  text-decoration:none;
  &:hover .circle {
    margin-bottom: 0;
    position: relative;
    z-index: 1;
    top: -60px;
    right: -10px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    animation: ${illuminate} 2s ease-out infinite;
    background: #edf5e1;
  }
`

const IconContainer = styled.i`
  height: 5px;
  &:hover i {
    transform: translateY(-5px);
  }
`
export default Nav