import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <ProjectSection />
      <Contacts />
    </>
  );
}

export default App;
