import styled from 'styled-components'
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

import { Skills, SkillsContainer } from '../../src/components/skills/skills'

const Experience = () => {

  let iconStyle = { background: "#06D6A0"};

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


const Header = styled.div`
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  max-width: 100vw;
  display: flex;
  flex-direction: row;
  height: auto;
`


const ExperienceDesc = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  font-weight: 400;
  /* letter-spacing: 1px; */
`

export default Experience;