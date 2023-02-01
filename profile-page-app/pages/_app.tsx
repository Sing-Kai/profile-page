import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import {ThemeProvider} from 'styled-components'
import {COLORS} from '../src/colours/colours'
import styled from 'styled-components'
import Nav from "../src/components/Nav"

const theme = {
  colors: COLORS,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Nav/>
        <TextContainer>
          <IntroText>Sing-Kai</IntroText>
          <IntroDesc>Some Description</IntroDesc>
        </TextContainer>
      </Header> 
      {/* <BodyContainer>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </BodyContainer> */}
    </ThemeProvider>
  )
}

const Header = styled.div`
  height: 80vh;
  background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 111, 0.7), 
    rgba(40, 180, 131, 0.9));
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 85%, 0 85% );
`
const TextContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%)
`

const IntroText = styled.span`
  text-transform: uppercase;
  color: white;
  display: block;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 20px;
`
const IntroDesc = styled.span`
  color: white;
  display: block;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 5px;
`
