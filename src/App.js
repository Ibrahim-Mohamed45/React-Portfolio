import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import { HashRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="projects" element={<Projects />}/>
        <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;

