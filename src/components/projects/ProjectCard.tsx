import Image, {StaticImageData} from 'next/image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import Link  from 'next/link'
import IProject from '../../data/project-data'


const ProjectCard = ({img, title, description, url}: IProject) => {

  return (
    <ProjectContainer>
      <ProjectImage>
        <Image src={img} alt="project alt" width={380} height={120}></Image>
      </ProjectImage>
      <TitleContainer>
          <ProjectTitle>{title}</ProjectTitle>
          <LinkContainer>
            <Link href={url} target={"_blank"}>
              <FontAwesomeIcon icon={faGithub} size="1x"/>  
            </Link>
          </LinkContainer>
        </TitleContainer>
        <div>
          <ProjectDesc>{description}</ProjectDesc>
        </div>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  background: whitesmoke;
  border-radius: 15px;
  width: auto;
  min-height: 240px;
  max-width: 390px;
  padding: 5px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
const ProjectImage = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  height: auto;
  line-height: 0;
`

const ProjectTitle = styled.h3`
  margin: 3px;
  padding: 3px;
  font-size: 13px;
  font-weight: bold;
  line-height: 0.8em;
  text-transform: capitalize;
`

const LinkContainer = styled.div`
  margin: 3px 3px 3px auto;
  padding: 2px;
`

const ProjectDesc = styled.div`
  margin: 3px;
  padding: 3px;
  font-size: 11px;
  line-height: 1.0rem;
`

export default ProjectCard