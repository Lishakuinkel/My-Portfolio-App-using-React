import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home"
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <Home /> 
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
