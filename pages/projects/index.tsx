import styled from 'styled-components'
import {PageContainer} from '../../src/components/page/page'
import Navbar from "../../src/components/navbar/Navbar"
import IProject, { projectData } from '../../src/data/project-data'
import { useState, useEffect } from 'react'
import ProjectCard from '../../src/components/projects/ProjectCard'

const Projects = () => {

  const [projects, setProjects] = useState<IProject[]>(projectData)

  const content = projects.map((data)=> <ProjectCard key={data.id} {...data}/>)

  useEffect(()=>{
    
  })


  return (
    <PageContainer>
      <Navbar/>
      <ProjectsContainer>
        {content}
      </ProjectsContainer>
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