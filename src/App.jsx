import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

function App() {
  useTheme();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
