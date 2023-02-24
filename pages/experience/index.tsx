import styled from 'styled-components'
import Nav from "../../src/components/Nav"
import Footer from "../../src/components/Footer"
import Pages from '../../src/enums/pages'
import IExperience, {experienceData} from '../../src/data/experience-data'

const Experience = () => {
  return (
    <>
      <Header>
        <ExperienceContainer>
          {
            experienceData.map((experience) => { 
              return <ExperienceCardContainer key={experience.id} {...experience}/>
            })
          }
        </ExperienceContainer>
        <Nav page={Pages.Experience}/> 
      </Header>
      {/* <Footer/> */}
    </>
  )
}

const ExperienceCardContainer = ({company, title, description, date, skills, line}: IExperience) =>{
  return (
    <>
      <ExperienceCard>
        <TitleContainer>
          <ExperienceTitle>{company}</ExperienceTitle>
          <ExperienceDate>{date}</ExperienceDate>
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
  height: auto;
`
const Line = styled.div`
  border-bottom: 3px solid rgba(255,255,255,1.0);
`
const ExperienceContainer = styled.div`
  color: white;
  margin: 100px auto;
  padding-top: 5px;
  width: 50%;
  height: auto;
  position: fix;
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
  margin: 5px;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 8px;
`
const ExperienceText = styled.div`
  margin: 5px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 2px;
`
const ExperienceDate = styled.div`
  margin: 5px;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 2px;
`

const ExperienceItemList = styled.ul`
    margin: 0;
`

const ExperienceDesc = styled.div`
  margin: 5px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1px;
`
const ExperienceItem = styled.li`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
`

export default Experience;