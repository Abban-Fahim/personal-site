import '../styles/variables.module.scss'
import '../styles/global-styles.scss'
import Navbar from "../components/Navbar"
import SideMenu from '../components/SideMenu'
import Footer from "../components/Footer"
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  const [sideBar, setSideBar] = useState(false);

  return <main className={theme}>
    <SideMenu sideBar={sideBar} setSideBar={setSideBar} />
    <Navbar theme={theme} setTheme={setTheme} setSideBar={setSideBar} />
    <Component {...pageProps} />
    <Footer />
  </main>
}

export default MyApp
