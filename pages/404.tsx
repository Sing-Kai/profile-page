import React from 'react'
import styled from 'styled-components'
import Nav from '../src/components/Nav';

const NotFoundPage = () => {
  return (
  <>
    <Header>
      <div>
        <ErrorContainer>
          <ErrorMessage>404 Page Note Found</ErrorMessage>
          <ErrorMessage>Ooops! The page you are looking for can't be found. Try clicking on the navigaiton items on the right</ErrorMessage>
        </ErrorContainer>
      </div>
      <div>
        <Nav page={''}/>
      </div>
    </Header>
  </>
  );
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
  display: flex;
  flex-direction: row;
  justify-content: right;
`

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ErrorMessage = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
  /* height: auto; */
    /* margin: auto; */
`

export default NotFoundPage

