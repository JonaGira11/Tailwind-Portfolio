import Main from "./components/Main"
import Projects from "./components/Projects"
import Sidenav from './components/Sidenav'
import About from "./sections/About"

function App() {


  return (
    <div className="bg-pink">
      <Sidenav />
      <Main />
      <About />
      <Projects/>
    </div>
  )
}

export default App
