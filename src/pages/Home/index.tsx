import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Home;
