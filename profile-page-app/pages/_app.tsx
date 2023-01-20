import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../src/components/Navbar"
import Footer from "../src/components/Footer"
import {ThemeProvider} from 'styled-components'
import {COLORS} from '../src/colours/colours'
import styled from 'styled-components';

const theme = {
  colors: COLORS
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <BodyContainer>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
      </BodyContainer>
    </ThemeProvider>
  )
}

const BodyContainer = styled.div`
  background: purple;
`
