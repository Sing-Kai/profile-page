import styled from 'styled-components'

const Experience = () => {
  return (
    <>
      <Header>
          Testing Skills and Experience Page
      </Header>
    </>
  )
}

const Header = styled.div`
  height: 95vh;
  background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 111, 0.8), 
    rgba(40, 180, 131, 1.0));
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  max-width: 100vw;
`

export default Experience;