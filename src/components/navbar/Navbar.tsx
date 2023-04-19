import React, {useState} from 'react'
import styled from 'styled-components'
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

const Item = ({url, icon, target, desc}: INavData) => {

  return (
    <NavItem>
      <Link href={url} target={target? "_blank": ""}>    
        <LinkItem>
          <FontAwesomeIcon icon={icon} size="1x"/>  
          <NavText>{desc}</NavText>
        </LinkItem>
      </Link>
    </NavItem>
  )
}

const NavbarContainer = styled.div`
  height: 5vh;
  width: 100vw;
  z-index: 1000;
  width: 72%;
  margin-left: auto;
  margin-right: auto; 
  @media (max-width: 850px) {
    width: 80vw;
    margin-left: 5%;
    margin-right: 5%
  }
`

const NavContainer = styled.ul`
  list-style-type: none;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  space-between;
  margin: 0;
  padding: 0;
  @media (max-width: 850px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0;
  }
`

const NavItem = styled.li`
  padding: 10px;
  text-decoration:none;
  z-index: 1;
  &:hover  {
    transition: 0.5s;
    background-color: #3e8e41;
    background-color:rgba(62, 142, 65, 0.5);
    border-radius: 8px;
  }
  @media (max-width: 850px) {
    padding: 5px;
  }
`

const LinkItem = styled.div`
  width: auto;
  text-align:center;
  color: #edf5e1;
  color: white;
  text-decoration:none;
`

const NavText = styled.span`
  padding: 15px;
  font-size: 12px;
  @media (max-width: 850px) {
    padding: 5px;
    font-size: 10px;
  }
`
export default Navbar;