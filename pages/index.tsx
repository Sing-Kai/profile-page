import Head from 'next/head'
import styled from 'styled-components'
import Nav from "../src/components/Nav"
import Footer from "../src/components/Footer"
import profile from '../src/images/profile-pic.jpg';
import Image from 'next/image'
import BackImage from '../src/components/BackImage'
import Pages from '../src/enums/pages'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sing-Kai</title>
        <meta name="description" content="Profile Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>
        <BackImage/>
        <ProfileTextCard>
          <ProfilePicContainer>
              <Image src={profile} alt="Picture of the author" width={225} height={225} ></Image>
          </ProfilePicContainer>
          <TextContainer>
            <IntroText>Hi! I'm Sing-Kai</IntroText>
            <IntroDesc>
              Welcome to my profile page! I'm a software engineer with 6 years of working experience in range of different companies and industries. 
              I enjoy working in collaborative teams that's passionate about creating software solutions with the modern technology.
            </IntroDesc>
          </TextContainer>
        </ProfileTextCard>
        <Nav page={Pages.Home}/>
      </Header> 
      <Footer/>
    </>
  )
}

const Header = styled.div`
  height: 95vh;
  background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 111, 0.8), 
    rgba(40, 180, 131, 1.0));
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  max-width: 100vw;
  display: flex;
  flex-direction: row;
`

const ProfileTextCard = styled.div`
  display: flex;
  justify-content: center;
  width: 500;
  padding: 5px;
  margin: 5px;
  position: relative;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`
const ProfilePicContainer = styled.div`
  border-radius: 50%;
  padding: 5px;
  margin: 5px;
`

const TextContainer = styled.div`
  padding: 5px;
  margin: 5px;
  width: 45%;
`

const IntroText = styled.span`
  text-transform: uppercase;
  color: white;
  display: block;
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 8px;
`
const IntroDesc = styled.span`
  color: white;
  display: block;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 3px;
`



