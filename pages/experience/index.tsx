import styled from 'styled-components'
import Nav from "../../src/components/Nav"
import Pages from '../../src/enums/pages'
const Experience = () => {
  return (
    <>
      <Header>
        <Nav page={Pages.Experience}/> 
        <ExperienceContainer>
          <ExperienceCard>
            <TitleContainer>
              <ExperienceTitle>Example Company </ExperienceTitle>
              <ExperienceDate>Aug 21 - Dec 22</ExperienceDate>
            </TitleContainer>
            <ExperienceItemList>
              <ExperienceItem>add some tech skill</ExperienceItem>
              <ExperienceItem>add some tech skill</ExperienceItem>
              <ExperienceItem>add some tech skill</ExperienceItem>
            </ExperienceItemList>
          </ExperienceCard>

          <Line/>

          <ExperienceCard>
            <TitleContainer>
              <ExperienceTitle>Example Company </ExperienceTitle>
              <ExperienceDate>Aug 21 - Dec 22</ExperienceDate>
            </TitleContainer>
            <ExperienceItemList>
              <ExperienceItem>add some tech skill</ExperienceItem>
              <ExperienceItem>add some tech skill</ExperienceItem>
              <ExperienceItem>add some tech skill</ExperienceItem>
            </ExperienceItemList>
          </ExperienceCard>
          
          <Line/>

          <ExperienceCard>
            <TitleContainer>
              <ExperienceTitle>Example Company </ExperienceTitle>
              <ExperienceDate>Aug 21 - Dec 22</ExperienceDate>
            </TitleContainer>
            <ExperienceItemList>
              <ExperienceItem>add some tech skill</ExperienceItem>
              <ExperienceItem>add some tech skill</ExperienceItem>
              <ExperienceItem>add some tech skill</ExperienceItem>
            </ExperienceItemList>
          </ExperienceCard>

        </ExperienceContainer>
      </Header>
    </>
  )
}

const Header = styled.div`
  height: 95vh;
  background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 111, 0.6), 
    rgba(40, 180, 131, 1.0));
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  max-width: 100vw;
`
const Line = styled.div`
  border-bottom: 3px solid rgba(255,255,255,1.0);
`
const ExperienceContainer = styled.div`
  /* padding-top: 15vh; */
  margin: auto;
  width: 45%;
  height: auto;
  position: relative;
  justify-content: center;
  display: flex;
  flex-direction: column;
`
const ExperienceCard = styled.div`
  margin: 10px;
  padding: 10px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`

const ExperienceTitle = styled.div`
  color: white;
  margin: 10px;
  padding: 5px;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 8px;
`

const ExperienceDate = styled.div`
  color: white;
  margin: 10px;
  padding: 5px;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: 8px;
`

const ExperienceItemList = styled.ul`
    margin: 0;
`

const ExperienceItem = styled.li`
  color: white;
  padding: 5px;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 3px;
`

export default Experience;