import styled from "styled-components"
import IExperience from '../../../src/data/experience-data'

const ExperienceCardContainer = ({company, title, description, date, skills}: IExperience) =>{
  return (
    <>
      <ExperienceCard>
        <TitleContainer>
          <ExperienceTitle>{title}</ExperienceTitle>
          <ExperienceText>{date}</ExperienceText>
        </TitleContainer>
        <ExperienceText>{company}</ExperienceText>
        <ExperienceDesc>{description}</ExperienceDesc>
        <ExperienceItemList>
          {
            skills.map((skill, i) => <ExperienceItem key={i}>{skill}</ExperienceItem>)
          }
        </ExperienceItemList>
      </ExperienceCard>
    </>
  )
}

export default ExperienceCardContainer


const ExperienceCard = styled.div`
  /* background: whitesmoke; */
  border-radius: 15px;
  /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
  margin: 10px 30px;
  padding: 10px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 2px solid black;
`
const ExperienceTitle = styled.div`
  margin: 5px 3px 0px 3px;
  font-size: 20px;
  font-weight: Bold;
  letter-spacing: 2px;
`
const ExperienceText = styled.div`
  margin: 5px;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
`

const ExperienceItemList = styled.ul`
    margin: 10px;
`

const ExperienceDesc = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  font-weight: 400;
  /* letter-spacing: 1px; */
`
const ExperienceItem = styled.li`
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
`