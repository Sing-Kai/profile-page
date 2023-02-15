import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import {COLORS} from '../src/colours/colours'
import styled from 'styled-components'
import Nav from "../src/components/Nav"
import Footer from "../src/components/Footer"
import profile from '../src/images/profile-pic.jpg';
import Image from 'next/image'

const theme = {
  colors: COLORS,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header>
        <Nav/>
          <ProfileTextCard>
            <ProfilePicContainer>
                <Image src={profile} alt="Picture of the author" width={250} height={250} ></Image>
            </ProfilePicContainer>
            <TextContainer>
              <IntroText>Sing-Kai</IntroText>
              <IntroDesc>Passionate mid-level software engineer who is self-discipline and capable of work with minimum amount of supervision. Collaborative team player who thrives on creating modern and engaging tech solutions.</IntroDesc>
            </TextContainer>
          </ProfileTextCard>
      </Header> 
      <Footer/>
    </ThemeProvider>
  )
}

const Header = styled.div`
  height: 90vh;
  background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 111, 0.7), 
    rgba(40, 180, 131, 0.9));
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
`

const ProfileTextCard = styled.div`
  display: flex;
  justify-content: center;
  width: 500;
  padding: 5px;
  margin: 5px;
  margin-top: 10%;
`
const ProfilePicContainer = styled.div`
  padding: 5px;
  margin: 5px;
`

const TextContainer = styled.div`
  padding: 5px;
  margin: 5px;
  width: 50%;
`

const IntroText = styled.span`
  text-transform: uppercase;
  color: white;
  display: block;
  font-size: 50px;
  font-weight: 800;
  letter-spacing: 15px;
`
const IntroDesc = styled.span`
  color: white;
  display: block;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 3px;
`
