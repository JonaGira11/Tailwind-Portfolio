import Main from "./components/Main"
import Sidenav from './components/Sidenav'
import About from "./sections/About"

function App() {


  return (
    <div className="bg-pink">
      <Sidenav />
      <Main />
     <About/>
    </div>
  )
}

export default App
