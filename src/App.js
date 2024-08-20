import Home from "./components/layouts/Home.jsx";
import Header from "./components/layouts/Header.jsx";
import AboutMe from "./components/layouts/AboutMe.jsx";
import Projects from "./components/layouts/Projects.jsx";
import { projectsObj } from "./components/data/ProjectsData.js";
import {skillsData} from "./components/data/SkillsData.js";
import Skills from "./components/layouts/Skills.jsx";
import ContactMe from "./components/layouts/ContactMe.jsx";


function App() {

  return(
    <>
      <Header></Header>
      <Home></Home>
      <h2>About Me</h2>
      <AboutMe></AboutMe>
      <h2>My Projects</h2>
      <Projects projectsData = {projectsObj}></Projects>
      <h2>Skills</h2>
      <Skills skillsData = {skillsData}></Skills>
      <h2>Contact Me</h2>
      <ContactMe></ContactMe>
    </>
  );
}

export default App;
