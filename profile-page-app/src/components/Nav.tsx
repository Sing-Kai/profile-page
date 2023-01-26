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
          </LinkItem>
          {/* <TitleAnimation className = "title">
            <div className = "title">Home</div>
          </TitleAnimation> */}
        </NavItem>
        
        <NavItem>
          <LinkItem href="" target = "_blank">
            <FontAwesomeIcon icon={faLinkedin} size="2x"/>  
            <div className = "circle"></div>

          </LinkItem>
          {/* <div className = "title">LinkedIn</div> */}

        </NavItem>
        
        <NavItem>
          <LinkItem href="" target = "_blank">
            <FontAwesomeIcon icon={faGithub} size="2x"/>  
            <div className = "circle"></div>
            {/* <div className = "title">GitHub</div> */}
          </LinkItem>
        </NavItem>
        
        <div className="background"></div>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.ul`
  padding: 0px;
  width: 140px;
  margin: 100px auto auto auto;
  list-style-type: none;
`

const NavItem = styled.li`
  padding: 30px;
  float:left;
  width: 100%;
  height: 50px;
  text-align:center;
  font-size:15px;
  color:pink;
  text-decoration:none;
  background-color: red;
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

const LinkItem = styled.a`
  float:left;
  width: 100px;
  text-align:center;
  /* font-size:15px; */
  color: #edf5e1;
  color: black;
  text-decoration:none;
  /* padding:0; */
  &:hover .circle {
    position: relative;
    margin: 0;
    z-index: 1;
    top: -60px;
    right: -10px;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    animation: ${illuminate} 2s ease-out infinite;
    background: #edf5e1;
  }
  /* &:hover .title{
    transform: translateY(5px);
    font-size: 15px;
    transition: .5s;
    color: #edf5e1;
    padding: 0;
  } */
`

const TitleAnimation = styled.div`
  .title{
    padding: 0px;
    margin: 0;
    font-size:10px;
  }
  &:hover .title{
    transform: translateY(5px);
    font-size: 150px;
    transition: .5s;
    color: #edf5e1;
    color: black;
    z-index: 1;
  }
`

const IconContainer = styled.i`
  padding: 0px;
  height: 5px;
  &:hover i {
    transform: translateX(-5px);
  }
`
export default Nav