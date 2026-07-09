import { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import Background from './components/Background/Background';
import Splash from './components/Splash/Splash';
import Navbar from './components/Navbar/Navbar';
import CommandPalette from './components/CommandPalette/CommandPalette';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Internships from './components/Internships/Internships';
import Projects from './components/Projects/Projects';
import Utilities from './components/Utilities/Utilities';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <Splash />
      <Background />

      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenPalette={() => setPaletteOpen(true)}
      />
      <CommandPalette
        open={paletteOpen}
        setOpen={setPaletteOpen}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <Stats />
        <Skills />
        <Internships />
        <Experience />
        <Projects />
        <Utilities />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
