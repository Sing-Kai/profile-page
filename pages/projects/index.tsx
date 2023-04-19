import styled from 'styled-components'
import {PageContainer} from '../../src/components/page/page'
import Navbar from "../../src/components/navbar/Navbar"
import IProject, { projectData } from '../../src/data/project-data'
import { useState } from 'react'
import ProjectCard from '../../src/components/projects/ProjectCard'
import Slide from '../../src/components/animation/Slide'

const Projects = () => {

  const [projects] = useState<IProject[]>(projectData)

  const content = projects.map((data)=> <ProjectCard key={data.id} {...data}/>)

  return (
      <PageContainer>
        <Navbar/>
        <Slide direction ={'left'}>
          <ProjectsContainer>
            {content}
          </ProjectsContainer>
        </Slide>
      </PageContainer>
  )
}

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin-left: auto;
  margin-right: auto; 
  margin-top: 3rem;
  justify-content:  center;
  align-content: center;
  height: auto;
  flex-wrap: wrap;
`

export default Projects