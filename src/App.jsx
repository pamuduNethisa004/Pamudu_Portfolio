// ============================================================
//  App.jsx — Root component, assembles all sections
// ============================================================

import useReveal from './hooks/useReveal';

import Cursor     from './components/Cursor';
import Nav        from './components/Nav';
import Hero       from './components/Hero';
import About      from './components/About';
import Skills     from './components/Skills';
import Projects   from './components/Projects';
import Experience from './components/Experience';
import Contact    from './components/Contact';
import Footer     from './components/Footer';

function App() {
  // Activates scroll-reveal for all .reveal elements
  useReveal();

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
