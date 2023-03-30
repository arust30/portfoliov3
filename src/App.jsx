import React from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Wave from "./components/Wave";
import About from "./components/About";
import "./index.css";


function App() {
  return (
    <>
      <Header />
      <Wave />
      <div className="bg-primary h-24 mt-[-3rem]">
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
