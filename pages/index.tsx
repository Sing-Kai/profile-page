import Head from 'next/head'
import styled from 'styled-components'
import Navbar from "../src/components/navbar/Navbar"
import Footer from "../src/components/Footer"
import profile from '../src/images/profile-pic.jpg';
import Image from 'next/image'
import BackImage from '../src/components/BackImage'

export default function Home() {
  return (
    <PageContainer>
      <BackImage/>
      <Head>
        <title>Sing-Kai</title>
        <meta name="description" content="Profile Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar/>
      <LandingBody>
        <ProfileTextCard>
          <ProfilePicContainer>
            <Image src={profile} alt="Picture of the author" width={225} height={225} ></Image>
          </ProfilePicContainer>
          <TextContainer>
            <IntroText>Hi! I'm Sing-Kai</IntroText>
            <IntroDesc>
              Welcome to my profile page! I'm a software engineer with 6 years of working experience in range of different companies and industries. 
              I enjoy working in collaborative teams that's passionate about creating software solutions with modern technology.
            </IntroDesc>
          </TextContainer>
        </ProfileTextCard>
      </LandingBody> 
      <Footer/>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 111, 0.8), 
    rgba(40, 180, 131, 1.0));
  background-size:cover;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  position: relative;
  height: 100vh;
`

const LandingBody = styled.div`
  height: 90vh;
  width: 60%;
  margin-left: auto;
  margin-right: auto; 
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  display: flex;
  flex-direction: row;
  @media (max-width: 850px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto; 
  }
`

const ProfileTextCard = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100vw;
    align-items: center;
    top: 40%;
    left: 50%;
  }
`
const ProfilePicContainer = styled.div`
  border-radius: 50%;
  padding: 5px;
  margin: 5px;
  @media (max-width: 850px) {
    height: 0;
    width: 0;
    visibility: hidden
  }
`

const TextContainer = styled.div`
  padding: 5px;
  margin: 5px;
  width: 100%;
  @media (max-width: 850px) {
    order: 2;
    height: auto;
    width: 100vw;
  }
`

const IntroText = styled.span`
  text-transform: uppercase;
  color: white;
  display: block;
  font-size: 35px;
  font-weight: 800;
  letter-spacing: 8px;
  @media (max-width: 850px) {
    font-size: 30px;
    height: auto;
    width: 80vw;
    margin-left: 10%;
    margin-right: 10%
  }
`
const IntroDesc = styled.span`
  color: white;
  display: block;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 3px;
  @media (max-width: 850px) {
    font-size: 12px;
    height: auto;
    width: 80vw;
    margin-left: 10%;
    margin-right: 10%
  }
`



