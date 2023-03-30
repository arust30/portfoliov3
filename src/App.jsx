import React from "react";
import Header from "./components/Header";
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
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
