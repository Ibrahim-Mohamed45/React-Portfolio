import React from 'react';
import Header from './components/Header';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        <Header />
        <Home />
        <Projects />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;

