import About from './About';
import ProfilePicture from './ProfilePicture';
import { Container, Content } from './styles';

const Hero = () => (
  <Container id="home">
    <Content>
      <About />
      <ProfilePicture />
    </Content>
  </Container>
);

export default Hero;
