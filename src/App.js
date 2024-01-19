import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro.jsx";
import Skill from "./components/Skills/skills.jsx";
import Works from "./components/Works/works.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill />
      <Works />
    </div>
  )
}
export default App;