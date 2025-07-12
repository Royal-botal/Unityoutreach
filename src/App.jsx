import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import MissionVision from "./MissionVision";
import Programs from "./Programs";
import Founders from "./Founders";
import Donation from "./Donation";
import Stats from "./Stats";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <section style={{ margin: '2rem auto', maxWidth: 900 }}>
        <About summaryOnly />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/partners" element={<div style={{padding:'4rem 2rem',textAlign:'center'}}><h2>Our Partners</h2><p>Coming soon...</p></div>} />
          <Route path="/donate" element={<Donation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
