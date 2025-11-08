import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCVButton from './components/FloatingCVButton';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
      <FloatingCVButton />
    </div>
  );
}

export default App;

