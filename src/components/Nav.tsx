import React from 'react'
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faHouse} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import Link  from 'next/link'

const Nav = () =>{
  return (
    <NavImageContainer>
      <div>
        <NavContainer className="nav">

          {/* <NavItem>
            <Link href="/">    
              <LinkItem>
                <FontAwesomeIcon icon={faHouse} size="2x"/>  
                <div className = "circle"></div>
                <span></span>
              </LinkItem>
            </Link>
          </NavItem> */}
          
          <NavItem>
            <Link href="https://www.linkedin.com/in/sing-kai/" target = "_blank">    
              <LinkItem>
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>  
                <div className = "circle"></div>
                <span></span>
              </LinkItem>
            </Link>
          </NavItem>
          
          <NavItem>
            <Link href="https://github.com/Sing-Kai" target = "_blank">    
              <LinkItem>
                <FontAwesomeIcon icon={faGithub} size="2x"/>  
                <div className = "circle"></div>
                <span></span>
              </LinkItem>
            </Link>
          </NavItem>

          <NavItem>
            <Link href="/experience">            
              <LinkItem>
                <FontAwesomeIcon icon={faBriefcase} size="2x"/>  
                <div className = "circle"></div>
                <span></span>
              </LinkItem>
            </Link>  
          </NavItem>

        </NavContainer>
      </div>
    </NavImageContainer>
  )
}

const NavImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`

const NavContainer = styled.ul`
  padding: 0px;
  width: 100px;
  margin: 10px 10px auto auto;
  list-style-type: none;
  z-index: 1000;
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
const LinkItem = styled.div`
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