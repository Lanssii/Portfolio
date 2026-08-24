import "./App.css";
import Education from "./components/Education.tsx";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import WorkExperience from "./components/WorkExperience.tsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <Education />
    </>
  );
}

export default App;
