import React from 'react'
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import hero from '../../src/images/pink.jpg'
import Image from 'next/image'

const Nav = () =>{
  return (
    <NavImageContainer>
      <div>
        <NavContainer className="nav">
          <NavItem>
            <LinkItem href="" target = "_blank">
              <FontAwesomeIcon icon={faHouse} size="2x"/>
              <div className = "circle"></div>
              <span></span>
            </LinkItem>
          </NavItem>
          
          <NavItem>
            <LinkItem href="" target = "_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>  
              <div className = "circle"></div>
              <span></span>
            </LinkItem>
            {/* <div className = "title">LinkedIn</div> */}

          </NavItem>
          
          <NavItem>
            <LinkItem href="" target = "_blank">
              <FontAwesomeIcon icon={faGithub} size="2x"/>  
              <div className = "circle"></div>
              <span></span>
              {/* <div className = "title">GitHub</div> */}
            </LinkItem>
          </NavItem>
          {/* <div className="background"></div> */}
        </NavContainer>
      </div>
      <ImageContainer>
        <Image src={hero} alt="Picture of the author" />
      </ImageContainer>
    </NavImageContainer>
  )
}

const NavImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`

// const NavigationContainers = styled.div`
//   /* display: flex;
//   flex-flow: column;
//   align-content: flex-end;
//   z-index: 1;
//   /* padding: 100px 0px; */
//   /* margin: auto;
//   background: red; */
// `

const ImageContainer = styled.div`
  opacity: 0.1;
  width: 100%;
  position: absolute;
  margin: auto;
  z-index: -1;
`
const NavContainer = styled.ul`
  padding: 0px;
  width: 100px;
  margin: 20px 20px auto auto;
  list-style-type: none;
  z-index: 1000;
  /* display: flex;
  flex-flow: column;
  align-content: flex-end; */
`

const NavItem = styled.li`
  padding: 15px;
  float:left;
  width: 100%;
  height: 30px;
  text-decoration:none;
  z-index: 1;
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
  color: #edf5e1;
  color: white;
  text-decoration:none;
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
`
export default Nav