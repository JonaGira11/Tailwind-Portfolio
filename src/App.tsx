import Main from "./components/Main"
import Projects from "./components/Projects"
import Sidenav from './components/Sidenav'
import About from "./sections/About"
import { Contact } from "./components/Contact"
import Footer from "./components/Footer"

function App() {


  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
