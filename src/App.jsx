import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

