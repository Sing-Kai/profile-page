import styled from 'styled-components'
import IExperience, {experienceData} from '../../src/data/experience-data'
import timelineElements from '../../src/data/timeline-data'

import {PageContainer} from '../../src/components/page/page'
import Navbar from "../../src/components/navbar/Navbar"

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faGraduationCap} from '@fortawesome/free-solid-svg-icons'

const Experience = () => {

  let iconStyle = { background: "#06D6A0", width: "50px", height: "50px", marginLeft: "-25px"};

  const timeLimeElementConent = timelineElements.map((element) => {
    let isWorkIcon = element.icon === "work";
    return (
      <VerticalTimelineElement
        key={element.id}
        date={element.date}
        dateClassName="date"
        iconStyle={iconStyle}
        icon={isWorkIcon ? <FontAwesomeIcon icon={faBriefcase}/> : <FontAwesomeIcon icon={faGraduationCap}/>}
      >
        <h4 className="vertical-timeline-element-title">
          {element.title}
        </h4>
        <h5 className="vertical-timeline-element-subtitle">
          {element.location}
        </h5>
        <ExperienceDesc id="description">{element.description}</ExperienceDesc>
        {
          element.skills && (
            <SkillsContainer>
              <Skills skills={element.skills}/>
            </SkillsContainer>
          )
        }
      </VerticalTimelineElement>
    );
  })

  return (
    <PageContainer>
      <Navbar/>
      <Header>
        <VerticalTimeline>
          {timeLimeElementConent}
        </VerticalTimeline>
      </Header>
    </PageContainer>
  )
}

const Skills = ({skills}:any) => {
  return (
    skills.map((skill:string) => {
      return (
        <SkillText>
          {skill}
        </SkillText>  
      )
    })
  )
}



// const Experience = () => {
//   return (
//     <PageContainer>
//       <Navbar/>
//       <Header>
//         <ExperienceContainer>
//           {
//             experienceData.map((experience) => { 
//               return <ExperienceCardContainer key={experience.id} {...experience}/>
//             })
//           }
//         </ExperienceContainer>
//       </Header>
//     </PageContainer>
//   )
// }

const ExperienceCardContainer = ({company, title, description, date, skills, line}: IExperience) =>{
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
      {/* {line && <Line/>} */}
    </>
  )
}

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
    justify-content: flex-start
`

const SkillText = styled.div`
  background: #dfdcdc;
  font-size: 10px;
  padding: 3px 5px;
  max-width: 200px;
  margin: 2px;
  text-align: center;
  border-radius: 10px
`

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
  margin: 20px auto;
  padding-top: 2px;
  min-width: 50%;
  height: auto;
  position: fix;
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 15px;
  @media (max-width: 850px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto; 
  }
`
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

export default Experience;