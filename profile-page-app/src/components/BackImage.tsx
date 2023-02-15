import React from 'react'
import styled, {keyframes} from 'styled-components'
import blanket from '../../src/images/pink.jpg'
import Image from 'next/image'

const BackImage = () => {
  return(
    <ImageContainer>
      <Image src={blanket} alt="background-image"
        // fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  opacity: 0.1;
  position: absolute;
  margin: auto;
  z-index: 100;
  display: block;
  /* margin-left: auto;
  margin-right: auto; */
  background: red;
`

export default BackImage