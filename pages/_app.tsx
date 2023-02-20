import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from 'styled-components'
import {COLORS} from '../src/colours/colours'
import Footer from "../src/components/Footer"

const theme = {
  colors: COLORS,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps}/>
      {/* <Footer/> */}
    </ThemeProvider>
  )
}