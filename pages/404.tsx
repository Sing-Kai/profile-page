import React from 'react'
import styled from 'styled-components'
import {PageContainer} from '../src/components/page/page'
import Navbar from "../src/components/navbar/Navbar"

const NotFoundPage = () => {
  return (
    <PageContainer>
      <Navbar/>
      <ErrorContainer>
        <ErrorMessage>404 Page Note Found</ErrorMessage>
          <ErrorMessage>Ooops! The page you are looking for can't be found. Try clicking on the navigaiton items on the top of the page</ErrorMessage>
        </ErrorContainer>
    </PageContainer>
  );
}

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
`

export default NotFoundPage

