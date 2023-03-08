import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link  from 'next/link'
import INavData, {navigationData} from '../../data/navigation-data'

const Navbar =  () => {

  const [navData] = useState<INavData[]>(navigationData)

  return (
    <NavbarContainer>
      <NavContainer>
        {
          navData.map((data) => <Item key={data.id} {...data}/>)
        }
      </NavContainer>
    </NavbarContainer>

  )
}

const Item = ({url, icon, target}: INavData) => {

  return (
    <NavItem>
      <Link href={url} target={target? "_blank": ""}>    
        <LinkItem>
          <FontAwesomeIcon icon={icon} size="1x"/>  
          <NavText>Testing </NavText>
        </LinkItem>
      </Link>
    </NavItem>
  )
}

const NavbarContainer = styled.div`
  height: 5vh;
  width: 100vw;
  z-index: 1000;
  width: 60%;
  margin-left: auto;
  margin-right: auto; 
`

const NavContainer = styled.ul`
  list-style-type: none;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  space-between;
  margin: 0;
  padding: 0%;
  @media (max-width: 600px) {

  }
`

const NavItem = styled.li`
  padding: 15px;
  text-decoration:none;
  z-index: 1;
  @media (max-width: 600px) {

  }
`

const LinkItem = styled.div`
  width: 100px;
  text-align:center;
  color: #edf5e1;
  color: white;
  text-decoration:none;
`

const NavText = styled.span`
  padding: 0.5rem;
`
export default Navbar;