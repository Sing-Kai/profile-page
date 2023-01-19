import React, { useState } from "react"
import { navLinks } from "../utils/data"
import Link from "next/link";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  // NavbarLinkExtended,
} from "../styles/Navbar.style";

const Header = () => {

  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <RightContainer>
          <NavbarLinkContainer>
              <NavbarLink>
                {navLinks.map((link, index) => {
                    return (
                      <ul>
                        <Link href={link.path}>
                          <li key={index}>{link.name}</li>
                        </Link>
                      </ul>
                    );
                  })}
              </NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <div>extended container</div>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>

  )
}

export default Header;