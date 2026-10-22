import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Work from './Work';

type Props = {
  yearsOfExperience: number;
};

const Home: React.FC<Props> = ({ yearsOfExperience }) => (
  <>
    <Hero />
    <About yearsOfExperience={yearsOfExperience} />
    <Work />
    <Contact />
  </>
);

export default Home;
