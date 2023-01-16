import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../src/components/Navbar"
import Footer from "../src/components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
