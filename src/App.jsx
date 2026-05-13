import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './containers/hero/Hero';
import About from './containers/about/About';
import Skills from './containers/skills/Skills';
import Projects from './containers/projects/Projects';
import Contact from './containers/contact/Contact';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;