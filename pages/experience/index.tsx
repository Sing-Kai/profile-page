import styled from 'styled-components'
import IExperience, {experienceData} from '../../src/data/experience-data'
import {PageContainer} from '../../src/components/page/page'
import Navbar from "../../src/components/navbar/Navbar"

const Experience = () => {
  return (
    <PageContainer>
      <Navbar/>
      <Header>
        <ExperienceContainer>
          {
            experienceData.map((experience) => { 
              return <ExperienceCardContainer key={experience.id} {...experience}/>
            })
          }
        </ExperienceContainer>
      </Header>
    </PageContainer>
  )
}

const ExperienceCardContainer = ({company, title, description, date, skills, line}: IExperience) =>{
  return (
    <>
      <ExperienceCard>
        <TitleContainer>
          <ExperienceTitle>{company}</ExperienceTitle>
          <ExperienceText>{date}</ExperienceText>
        </TitleContainer>
        <ExperienceText>{title}</ExperienceText>
        <ExperienceDesc>{description}</ExperienceDesc>
        <ExperienceItemList>
          {
            skills.map((skill, i) => <ExperienceItem key={i}>{skill}</ExperienceItem>)
          }
        </ExperienceItemList>
      </ExperienceCard>
      {line && <Line/>}
    </>
  )
}

const Header = styled.div`
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  height: auto;
`
const Line = styled.div`
  border-bottom: 2px solid rgba(255,255,255,1.0);
`
const ExperienceContainer = styled.div`
  color: white;
  margin: auto;
  padding-top: 2px;
  width: 60%;
  height: auto;
  position: fix;
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto; 
  }
`
const ExperienceCard = styled.div`
  margin: 5px;
  padding: 5px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`
const ExperienceTitle = styled.div`
  margin: 5px;
  font-size: 17px;
  font-weight: Bold;
  letter-spacing: 2px;
`
const ExperienceText = styled.div`
  margin: 5px;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 2px;
`

const ExperienceItemList = styled.ul`
    margin: 0;
`

const ExperienceDesc = styled.div`
  margin: 5px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`
const ExperienceItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`

export default Experience;