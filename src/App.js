import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro.jsx";
import Skill from "./components/Skills/skills.jsx";
import Works from "./components/Works/works.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill />
      <Works />
      <Contact />
      <Footer />
    </div>
  )
}
export default App;