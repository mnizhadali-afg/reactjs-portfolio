import Hero from './components/hero/Hero';
import WhoAmI from './components/who-ami/WhoAmI';
import Navigation from './components/Navigation';
import Projects from './components/projects/Projects';
import Experience from './components/experience/Experience';

export default function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <WhoAmI />
      <Projects />
      <Experience />
    </>
  );
}
