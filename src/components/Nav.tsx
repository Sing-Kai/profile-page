import React, {useEffect, useState} from 'react'
import styled, {keyframes} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link  from 'next/link'
import INavData, {navigationData} from '../data/navigation-data'

interface INavDataItems{
  page: string
}

const Nav = ({page}: INavDataItems) =>{

  const [navData, setNavData] = useState<INavData[]>(navigationData)

  const getNavigationItems = (path:string, items: INavData[]) =>  {

    let testNavData:INavData[] = [];

    if(path === '/'){
      testNavData = navigationData.filter((d) => {
        return d.id !== page
      });
    }

    if(path === '/experience'){
      testNavData = navigationData.filter((d) => {
        return d.id !== page
      });
    }
    return testNavData;
  }

  useEffect(() => {
    const navItems = getNavigationItems(location.pathname, navigationData)
    setNavData(navItems)
  }, [])

  return (
    <NavImageContainer>
      <div>
        <NavContainer className="nav">
          {
            navData.map((data) => <Item key={data.id} {...data}/>)
          }
        </NavContainer>
      </div>
    </NavImageContainer>
  )
}


const Item = ({url, icon, target}: INavData) => {

  return (
    <NavItem>
      <Link href={url} target={target? "_blank": ""}>    
        <LinkItem>
          <FontAwesomeIcon icon={icon} size="2x"/>  
          <div className = "circle"></div>
          <span></span>
        </LinkItem>
      </Link>
    </NavItem>
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