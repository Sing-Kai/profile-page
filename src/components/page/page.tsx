import styled from 'styled-components'

export const PageContainer = styled.div`
  background-image: linear-gradient(
    to right bottom, 
    rgba(126, 213, 111, 0.8), 
    rgba(40, 180, 131, 1.0));
  background-size:cover;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  position: relative;
  height: auto;
  min-height: 100vh;
`

export const LandingBody = styled.div`
  height: 90vh;
  width: 60%;
  margin-left: auto;
  margin-right: auto; 
  background-size:cover;
  position: relative;
  clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100% );
  display: flex;
  flex-direction: row;
  @media (max-width: 850px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto; 
  }
`

// export default {PageContainer, LandingBody}