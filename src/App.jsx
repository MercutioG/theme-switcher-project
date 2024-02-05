import Navbar from "./components/Navbar"
import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import { ContextAPI } from "./context/ThemeContext"

const App = () => {
  return (
    <ContextAPI>
      <Navbar/>
      <Header/>
      <MainContent/>
      <Footer/>
    </ContextAPI>
  )
}

export default App