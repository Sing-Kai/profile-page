import React from 'react'
import styled, {keyframes} from 'styled-components'
import blanket from '../../src/images/blanket.jpg'
import Image from 'next/image'

const BackImage = () => {
  return(
    <ImageContainer>
      <Image src={blanket} alt="background-image"
        fill
        style={{objectFit: 'cover' }}
        />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  opacity: 0.3;
  position: absolute;
  z-index: -1;
  background-size: auto;
  width: 100vw;
  height: 100vh;
`


export default BackImage