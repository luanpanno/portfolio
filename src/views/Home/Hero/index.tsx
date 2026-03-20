import About from './About';
import ProfilePicture from './ProfilePicture';
import { Container, Content } from './styles';

const Hero = () => (
  <Container id="home" aria-labelledby="hero-heading">
    <Content>
      <About />
      <ProfilePicture className="hero-picture" />
    </Content>
  </Container>
);

export default Hero;
