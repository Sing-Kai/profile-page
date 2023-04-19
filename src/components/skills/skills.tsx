import styled from 'styled-components'

export const Skills = ({skills}:any) => {
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

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 10px;
    justify-content: flex-start;
`

export const SkillText = styled.div`
  background: #dfdcdc;
  font-size: 10px;
  padding: 3px 5px;
  max-width: 200px;
  margin: 2px;
  text-align: center;
  border-radius: 10px;
`