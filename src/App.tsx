import Main from "./components/Main"
import Projects from "./components/Projects"
import Sidenav from './components/Sidenav'
import About from "./sections/About"
import { Contact } from "./components/Contact"

function App() {


  return (
    <div className="bg-pink">
      <Sidenav />
      <Main />
      <About />
      <Projects/>
      <Contact />
    </div>
  )
}

export default App
