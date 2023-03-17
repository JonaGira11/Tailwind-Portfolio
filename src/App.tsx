import Main from "./components/Main"
import Projects from "./components/Projects"
import Sidenav from './components/Sidenav'
import About from "./sections/About"
import { Contact } from "./components/Contact"
import Footer from "./components/Footer"
import Skills from "./components/Skills"

function App() {


  return (
    <div  >
      <Sidenav />
      <Main />
      <About />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
