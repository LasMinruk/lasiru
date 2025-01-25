import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Skills from "./components/Skills"; // Import Skills component


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
       {/* Add Skills Section */}
      <Education />
      <Contact />
      <Skills />
    </div>
  );
}

export default App;
