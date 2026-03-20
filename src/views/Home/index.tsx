import Contact from './Contact';
import Hero from './Hero';
import Projects from './Projects';
import { Container } from './styles';

const Home = () => (
  <Container>
    <Hero />
    <Projects />
    <Contact />
  </Container>
);

export default Home;
